import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  BeautifierOptionName,
} from "unibeautify";
import * as _ from "lodash";
import { linkForLanguage, linkForOption, emojis } from "./utils";
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
        this.packageName
      )} | [![npm](https://img.shields.io/npm/v/${
        this.packageName
      }.svg)](https://www.npmjs.com/package/${this.packageName}) |`
    );
    this.packagePeerDependencies.forEach(dep =>
      builder.append(
        `| **[${dep}](https://www.npmjs.com/package/${dep})** | v${this.getPackageCurrentVersion(
          dep
        )} | [![npm](https://img.shields.io/npm/v/${dep}.svg)](https://www.npmjs.com/package/${dep}) |`
      )
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
  private get packagePeerDependencies(): string[] {
    return Object.keys(_.get(this.pkg, "peerDependencies", {}));
  }
  private appendUsageSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Usage", 2);
    builder.append(
      "Below are example configuration files for each of the supported languages."
    );
    const beautifierName: string = this.beautifier.name;
    this.languages.forEach(lang => {
      builder.details(lang.name, builder => {
        builder.append(
          `A \`.unibeautifyrc.json\` file would look like the following:`
        );
        builder.code(
          JSON.stringify(
            {
              [lang.name]: {
                beautifiers: [beautifierName],
              },
            },
            null,
            2
          ),
          "json"
        );
      });
    });
    return builder;
  }
  private appendOptionsTable(builder: MarkdownBuilder): MarkdownBuilder {
    /*
    | Option | CSS | Lang 2 |
    | --- | --- | --- |
    | Arrow Parens | &#10060; | &#9989; |
    */
    // console.log(JSON.stringify(this.allOptions, null, 2));
    builder.append(
      "| Option |" +
        this.languages.map(lang => ` ${linkForLanguage(lang)} |`).join("")
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
          false
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
        {}
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
}
interface OptionsLookup {
  [languageName: string]: OptionsRegistry;
}
