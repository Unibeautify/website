import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  DependencyDefinition,
  DependencyType,
  ExecutableDependencyDefinition,
} from "unibeautify";
import * as _ from "lodash";
import { linkForLanguage, linkForOption, emojis, slugify } from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";

export default class BeautifierDoc extends Doc {
  private readonly optionsLookup: OptionsLookup;
  constructor(private beautifier: Beautifier, private languages: Language[]) {
    super();
    this.optionsLookup = this.createOptionsLookup();
  }
  public get prefix(): string {
    return "beautifier-";
  }
  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }
  public get title(): string {
    return this.beautifier.name;
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    this.appendAboutSection(builder);
    this.appendInstallSection(builder);
    this.appendUsageSection(builder);
    builder.header("Options", 2);
    this.appendOptionsTable(builder);
    return builder.build();
  }
  private appendAboutSection(builder: MarkdownBuilder): MarkdownBuilder {
    if (!this.pkg) {
      return builder;
    }
    builder.header("About", 2);
    builder.append(this.packageDescription);
    builder.append("| Package | Docs | Latest |");
    builder.append("| --- | --- | --- |");
    builder.append(
      `| **[${this.packageName}](https://www.npmjs.com/package/${
        this.packageName
      })** | v${this.getPackageCurrentVersion(
        this.packageName,
      )} | [![npm](https://img.shields.io/npm/v/${
        this.packageName
      }.svg)](https://www.npmjs.com/package/${this.packageName}) |`,
    );
    this.packagePeerDependencies.forEach(dep =>
      builder.append(
        `| **[${dep}](https://www.npmjs.com/package/${dep})** | v${this.getPackageCurrentVersion(
          dep,
        )} | [![npm](https://img.shields.io/npm/v/${dep}.svg)](https://www.npmjs.com/package/${dep}) |`,
      ),
    );
    return builder;
  }
  private getPackageCurrentVersion(packageName: string): string {
    return require(`${packageName}/package.json`).version;
  }
  private get packageName(): string {
    return _.get(this.pkg, "name", "");
  }
  private get packageDescription(): string {
    return _.get(this.pkg, "description", "");
  }
  private appendInstallSection(builder: MarkdownBuilder): MarkdownBuilder {
    if (!this.pkg) {
      return builder;
    }
    this.appendDependenciesSection(builder);
    builder.header("Install", 2);
    const packageNames: string[] = [
      ...this.packagePeerDependencies,
      this.packageName,
    ];
    builder.append("Install with [`npm`](https://www.npmjs.com/):");
    builder.code(`npm install --save-dev ${packageNames.join(" ")}`, "bash");
    builder.append("Or with [`yarn`](https://yarnpkg.com/):");
    builder.code(`yarn add --dev ${packageNames.join(" ")}`, "bash");
    return builder;
  }

  private appendDependenciesSection(builder: MarkdownBuilder): MarkdownBuilder {
    const dependencies = this.dependencies.filter(
      dep => dep.type === DependencyType.Executable,
    );
    if (dependencies.length === 0) {
      return builder;
    }
    builder.header("Prerequisites", 2);
    builder.append("Please install the following prerequisites:");
    const depLinks = dependencies.map((dep: ExecutableDependencyDefinition) =>
      MarkdownBuilder.createDocLink(
        dep.name,
        `executable-${slugify(this.beautifier.name)}-${slugify(dep.name)}`,
      ),
    );
    builder.list(depLinks);
    return builder;
  }

  private get packagePeerDependencies(): string[] {
    return Object.keys(_.get(this.pkg, "peerDependencies", {}));
  }

  private appendUsageSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Usage", 2);

    const beautifierName: string = this.beautifier.name;

    builder.append(
      `Enable ${beautifierName} beautifier for a language by adding the beautifier's name, \`${beautifierName}\`, to \`beautifiers\` option array.`,
    );

    const { dependencies } = this;
    if (dependencies.length === 0) {
      return builder;
    }
    const executableConfig = dependencies
      .filter(dep => dep.type === DependencyType.Executable)
      .reduce(
        (config, dep: ExecutableDependencyDefinition) => ({
          ...config,
          [dep.name]: {
            path: fakePathForExecutable(dep),
          },
        }),
        {},
      );

    const beautifierOptions: any = {
      ...executableConfig,
    };
    const canResolveConfig = !!this.beautifier.resolveConfig;
    if (canResolveConfig) {
      beautifierOptions.prefer_beautifier_config = true;
    }

    builder.append("");
    builder.append(
      `A \`.unibeautifyrc.json\` file would look like the following, including some more advanced options:`,
    );
    builder.code(
      JSON.stringify(
        {
          LANGUAGE_NAME: {
            beautifiers: [beautifierName],
            [beautifierName]: beautifierOptions,
          },
        },
        null,
        2,
      ),
      "json",
    );
    builder.append(
      `**Note**: The \`LANGUAGE_NAME\` should be replaced with your desired supported language name, such as ${this.languages
        .slice(0, 3)
        .map(lang => `\`${lang.name}\``)
        .join(", ")}, etc.`,
    );

    if (canResolveConfig) {
      builder.header("Prefer Beautifier Specific Configuration File", 3);
      builder.append(
        `After enabling \`prefer_beautifier_config\` option for the ${
          this.beautifier.name
        } beautifier Unibeautify will attempt to find a ${
          this.beautifier.name
        } configuration file.`,
      );
      builder.append(
        `If a ${
          this.beautifier.name
        } configuration file is found then Unibeautify's own configuration file (e.g. \`.unibeautifyrc\`) will be ignored.`,
      );
    }

    return builder;
  }
  private appendOptionsTable(builder: MarkdownBuilder): MarkdownBuilder {
    if (!this.hasOptions) {
      builder.append("No configuration options supported.");
      return builder;
    }
    /*
    | Option | CSS | Lang 2 |
    | --- | --- | --- |
    | Arrow Parens | &#10060; | &#9989; |
    */
    builder.append(
      "| Option |" +
        this.languages.map(lang => ` ${linkForLanguage(lang)} |`).join(""),
    );
    builder.append("| --- |" + this.languages.map(lang => ` --- |`).join(""));
    Object.keys(this.allOptions).forEach(optionKey => {
      const option = this.allOptions[optionKey];
      let row = `| ${linkForOption(optionKey, option)} |`;
      let isSupported = false;
      this.languages.forEach(language => {
        const languageSupportsOption: boolean = _.get(
          this.optionsLookup as any,
          `${language.name}.${optionKey}`,
          false,
        );
        const symbol = languageSupportsOption ? emojis.checkmark : emojis.x;
        row += ` ${symbol} |`;
        if (languageSupportsOption) {
          isSupported = true;
        }
      });
      if (isSupported) {
        builder.append(row);
      }
    });
    return builder;
  }
  private createOptionsLookup(): OptionsLookup {
    return this.languages
      .map(language => ({ language, options: this.options(language) }))
      .reduce(
        (lookup, { language, options }) => ({
          ...lookup,
          [language.name]: options,
        }),
        {},
      );
  }
  private options(language: Language): OptionsRegistry {
    return Unibeautify.getOptionsSupportedByBeautifierForLanguage({
      beautifier: this.beautifier,
      language,
    });
  }
  private get allOptions(): OptionsRegistry {
    return Unibeautify.loadedOptions;
  }
  private get pkg(): object | undefined {
    return this.beautifier.package;
  }
  protected get customEditUrl() {
    return _.get(this.pkg, "homepage");
  }
  private get dependencies(): DependencyDefinition[] {
    return this.beautifier.dependencies || [];
  }
  private get hasOptions(): boolean {
    return !Object.keys(this.optionsLookup).every(
      key => Object.keys(this.optionsLookup[key]).length === 0,
    );
  }
}
interface OptionsLookup {
  [languageName: string]: OptionsRegistry;
}

function fakePathForExecutable(
  dependency: ExecutableDependencyDefinition,
): string {
  return `/absolute/path/to/${dependency.program}`;
}
