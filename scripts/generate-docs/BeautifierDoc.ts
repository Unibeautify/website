import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  DependencyDefinition,
  DependencyType,
  ExecutableDependencyDefinition,
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
    builder.header("Install", 2);
    const packageNames: string[] = [
      ...this.packagePeerDependencies,
      this.packageName,
    ];
    builder.append("Install with [`npm`](https://www.npmjs.com/):");
    builder.code(`npm install --save-dev ${packageNames.join(" ")}`, "bash");
    builder.append("Or with [`yarn`](https://yarnpkg.com/):");
    builder.code(`yarn add --dev ${packageNames.join(" ")}`, "bash");
    return this.appendDependenciesSection(builder);
  }

  private appendDependenciesSection(builder: MarkdownBuilder): MarkdownBuilder {
    const { dependencies } = this;
    if (dependencies.length === 0) {
      return builder;
    }
    dependencies
      .filter(dep => dep.type === DependencyType.Executable)
      .forEach((dep: ExecutableDependencyDefinition) =>
        this.appendExecutableDependencySection(dep, builder),
      );
    return builder;
  }

  private appendExecutableDependencySection(
    dependency: ExecutableDependencyDefinition,
    builder: MarkdownBuilder,
  ): MarkdownBuilder {
    const beautifierName: string = this.beautifier.name;
    const dependencyName: string = dependency.name;
    builder.header(`Install ${dependencyName} Executable`, 3);
    const isConfusing =
      beautifierName.toLowerCase() === dependencyName.toLowerCase();
    if (isConfusing) {
      builder.append(
        `*${dependencyName} executable should not be confused with ${beautifierName} beautifier with the same name.*`,
      );
    }
    builder.append(
      `${dependencyName} executable is a third-party program you must install manually and is required for beautification.`,
    );

    builder.append("");
    builder.append(
      "Below are instructions for each of the supported Operating Systems.",
    );

    builder.details("Windows", builder => {
      builder.append(
        "[Open the Command Prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089).",
      );

      builder.append(
        '\n<p><iframe width="560" height="315" src="https://www.youtube.com/embed/MBBWVgE0ewk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>\n',
      );

      // builder.append("It looks like the following for Windows 7:");
      // builder.append(
      //   "![windows-7-command-prompt](/img/windows/windows-7-command-prompt.png)",
      // );
      // builder.append("And this for Windows 10:");

      // builder.append("It looks like the following for Windows 10:");
      // builder.append(
      //   "![windows-10-command-prompt](/img/windows/windows-10-command-prompt.png)",
      // );

      builder.append(
        `\nFind the path to ${dependencyName} by running the command:`,
      );
      builder.code(`where ${dependency.program}`, "batch");

      builder.append(
        "Which will return an absolute path like one of the following:",
      );
      const suffixes = ["", ".exe", ".bat"];
      builder.code(
        suffixes
          .map(
            suffix => `C:\\absolute\\path\\to\\${dependency.program}${suffix}`,
          )
          .join("\n"),
        "text",
      );

      builder.append("Remember this executable path for later.");

      builder.append(
        "If `where` fails to return an executable path then you need to fix your `PATH` Environment Variable:",
      );
      builder.append(
        '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/8HK1BsRprt0?start=334" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
      );
      builder.append(
        `Once you successfully an executable path continue to ${MarkdownBuilder.createLink(
          "Usage",
          "#usage",
        )} section below.`,
      );
      builder.append(
        `Replace \`${fakePathForExecutable(
          dependency,
        )}\` with your specific executable path value.`,
      );
    });
    builder.details("macOS", builder => {
      builder.append("![mac-terminal](/img/mac/mac-terminal.png)");

      builder.append(
        '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/zw7Nd67_aFw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
      );

      builder.append(
        '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/aYVEZTmBiuc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
      );
      builder.code(`which ${dependency.program}`, "bash");
    });
    builder.details("Linux", builder => {
      builder.append(
        "![linux-terminal](/img/linux/linux-terminal-on-ubuntu.png)",
      );
      builder.code(`which ${dependency.program}`, "bash");
    });

    // builder.append(
    //   "Below are example configuration files for each of the supported languages.",
    // );

    // this.languages.forEach(lang => {
    //   builder.details(lang.name, builder => {
    //     builder.append(
    //       `A \`.unibeautifyrc.json\` file would look like the following:`,
    //     );
    //     builder.code(
    //       JSON.stringify(
    //         {
    //           [lang.name]: {
    //             [beautifierName]: {
    //               [dependencyName]: {
    //                 path: "/path/to/dependency",
    //               },
    //             },
    //           },
    //         },
    //         null,
    //         2,
    //       ),
    //       "json",
    //     );
    //   });
    // });
    return builder;
  }

  private get packagePeerDependencies(): string[] {
    return Object.keys(_.get(this.pkg, "peerDependencies", {}));
  }

  private appendUsageSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Usage", 2);
    // builder.append(
    //   "Below are example configuration files for each of the supported languages.",
    // );

    const beautifierName: string = this.beautifier.name;

    // this.languages.forEach(lang => {
    //   builder.details(lang.name, builder => {
    //     builder.append(
    //       `A \`.unibeautifyrc.json\` file would look like the following:`,
    //     );
    //     builder.code(
    //       JSON.stringify(
    //         {
    //           [lang.name]: {
    //             beautifiers: [beautifierName],
    //           },
    //         },
    //         null,
    //         2,
    //       ),
    //       "json",
    //     );
    //   });
    // });

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
    if (this.beautifier.resolveConfig) {
      beautifierOptions.prefer_beautifier_config = true;
    }

    builder.append(
      `A \`.unibeautifyrc.json\` file would look like the following:`,
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
        .map(lang => `\`${lang.name}\``).join(', ')}, etc.`,
    );

    // this.languages.forEach(lang => {
    //   builder.details(lang.name, builder => {
    //     builder.append(
    //       `A \`.unibeautifyrc.json\` file would look like the following:`,
    //     );
    //     builder.code(
    //       JSON.stringify(
    //         {
    //           [lang.name]: {
    //             beautifiers: [beautifierName],
    //             [beautifierName]: beautifierOptions,
    //           },
    //         },
    //         null,
    //         2,
    //       ),
    //       "json",
    //     );
    //   });
    // });

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
