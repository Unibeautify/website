import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  DependencyDefinition,
  DependencyType,
  ExecutableDependencyDefinition,
  Badge,
} from "unibeautify";
import * as _ from "lodash";
const getPkgRepo = require("get-pkg-repo");

import {
  linkForLanguage,
  linkForOption,
  emojis,
  slugify,
  websiteEditUrl,
  badgesForRepository,
} from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import ExecutableDoc from "./ExecutableDoc";

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
  protected get slug(): string {
    return slugify(this.beautifierName);
  }
  public get title(): string {
    return `${this.beautifierName} Beautifier`;
  }
  public get sidebarLabel(): string {
    return this.beautifierName;
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    this.appendAboutSection(builder);
    this.appendInstallSection(builder);
    this.appendUsageSection(builder);
    this.appendOptionsTable(builder);
    this.appendFaqSection(builder);
    this.appendTroubleshootingSection(builder);
    // this.appendExecutablesSection(builder);
    return builder.build();
  }
  private appendAboutSection(builder: MarkdownBuilder): MarkdownBuilder {
    if (!this.pkg) {
      return builder;
    }
    builder.appendBadges([
      {
        description: "npm downloads",
        url: `https://img.shields.io/npm/dt/${
          this.packageName
        }.svg?style=flat-square`,
        href: `https://www.npmjs.com/package/${this.packageName}`,
      },
      ...this.repoBadges,
      ...this.badges,
    ]);
    builder.editButton(
      `Edit ${this.beautifierName} Beautifier`,
      this.homepageUrl
    );
    builder.header("About", 2);
    builder.append(this.packageDescription);

    builder.append("| Package | Docs | Latest |");
    builder.append("| --- | --- | --- |");
    [this.packageName, ...this.packagePeerDependencies].forEach(dep =>
      builder.append(
        `| ${MarkdownBuilder.bold(
          MarkdownBuilder.createLink(
            dep,
            `https://www.npmjs.com/package/${dep}`
          )
        )} | v${this.getPackageCurrentVersion(
          dep
        )} | ${MarkdownBuilder.createBadge({
          description: "npm",
          url: `https://img.shields.io/npm/v/${dep}.svg`,
          href: `https://www.npmjs.com/package/${dep}`,
        })} |`
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
      dep => dep.type === DependencyType.Executable
    );
    if (dependencies.length === 0) {
      return builder;
    }
    builder.header("Prerequisites", 2);
    builder.append("Please install the following prerequisites.");

    /*
    const depLinks = dependencies.map((dep: ExecutableDependencyDefinition) =>
      MarkdownBuilder.createDocLink(
        dep.name,
        `executable-${slugify(this.beautifierName)}-${slugify(dep.name)}`
      )
    );
    builder.list(depLinks);
    */

    this.appendExecutablesSection(builder);

    return builder;
  }

  private appendExecutablesSection(builder: MarkdownBuilder): MarkdownBuilder {
    /*
    const dependencies = this.dependencies.filter(
      dep => dep.type === DependencyType.Executable
    );
    if (dependencies.length === 0) {
      return builder;
    }
    */

    // builder.header("Executables", 2);
    // builder.append("Please install the following prerequisites:");
    // dependencies.forEach(async (dep: ExecutableDependencyDefinition) => {

    this.executables.forEach((dep: ExecutableDependencyDefinition) => {
      /*
      MarkdownBuilder.createDocLink(
        dep.name,
        `executable-${slugify(this.beautifierName)}-${slugify(dep.name)}`
      )
      */

      /*
      builder.header(`${dep.name} Executable`, 2);
      const contents = new ExecutableDoc(dep, this.beautifier, this.languages).body;
      const indentedContents = contents.replace(new RegExp("^(#+ .+)$","gm"),"#$1")
      builder.append(indentedContents);
      */

      this.appendExecutableSection(dep, builder);
      // "### Hello world".replace(new RegExp("^(#+ .+)$","gm"),"#$1")
    });
    return builder;
  }

  private get executables(): ExecutableDependencyDefinition[] {
    return this.dependencies.filter(
      dep => dep.type === DependencyType.Executable
    ) as any[];
  }

  private appendTroubleshootingSection(builder: MarkdownBuilder): MarkdownBuilder {
    // const dependencies: ExecutableDependencyDefinition[] = this.dependencies.filter(
    //   dep => dep.type === DependencyType.Executable
    // );
    if (this.executables.length === 0) {
      return builder;
    }

    new ExecutableDoc(this.executables[0], this.beautifier, this.languages).appendTroubleshootingSection(builder);

    /*
    // builder.header("Executables", 2);
    // builder.append("Please install the following prerequisites:");
    dependencies.forEach(async (dep: ExecutableDependencyDefinition) => {
      MarkdownBuilder.createDocLink(
        dep.name,
        `executable-${slugify(this.beautifierName)}-${slugify(dep.name)}`
      )

      builder.header(`${dep.name} Executable`, 2);
      const nestedBuilder = new MarkdownBuilder();
      // const contents = new ExecutableDoc(dep, this.beautifier, this.languages).body;
      new ExecutableDoc(dep, this.beautifier, this.languages).appendTroubleshootingSection(nestedBuilder);
      builder.append(MarkdownBuilder.indent(nestedBuilder.build()));

      new ExecutableDoc(dep, this.beautifier, this.languages).appendTroubleshootingSection(builder);

      // this.appendExecutableSection(dep, builder);
      // "### Hello world".replace(new RegExp("^(#+ .+)$","gm"),"#$1")
    });
    */
    return builder;
  }

  private appendExecutableSection(executable: ExecutableDependencyDefinition, builder: MarkdownBuilder): MarkdownBuilder {
    const { installationUrl, bugsUrl } = executable;
    const dependency = executable;
    const beautifierName: string = this.beautifier.name;
    const dependencyName: string = dependency.name;
    builder.header(`${executable.name} executable`, 3);
    builder.appendBadges(executable.badges || []);
    const isConfusing =
      beautifierName.toLowerCase() === dependencyName.toLowerCase();
    if (isConfusing) {
      builder.append(
        `> **${dependencyName} executable** should not be confused with **${beautifierName} beautifier** with the same name. Executables are non-[Node.js](https://nodejs.org/) tools for code formatting while beautifiers are [Node.js](https://nodejs.org/) packages which wrap an executable to be used by Unibeautify.\n`
      );
    }
    builder.append(
      `${dependencyName} executable is a third-party program you must install manually and is required for beautification.`
    );
    if (executable.homepageUrl) {
      builder.append(
        `See ${MarkdownBuilder.createLink(
          executable.homepageUrl,
          executable.homepageUrl
        )} for more information.`
      );
    }

    if (installationUrl) {
      // builder.header(`Install ${executable.name} executable`, 3);
      builder.append(
        `Install ${executable.name} (\`${
          executable.program
        }\`) by following ${MarkdownBuilder.createLink(
          installationUrl,
          installationUrl
        )}.`
      );
      if (bugsUrl) {
        builder.append(
          `If you have questions or want to report a bug, go to ${MarkdownBuilder.createLink(
            bugsUrl,
            bugsUrl
          )}.`
        );
      }
    }

    /*
    const dep = executable;
    const executableConfig = {
      [dep.name]: {
        path: fakePathForProgram(dep.program),
      },
    };
    const beautifierOptions: any = {
      ...executableConfig,
    };
    builder.append(
      `A \`.unibeautifyrc.json\` file would look like the following:`
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
        2
      ),
      "json"
    );
    builder.note(
      `The \`LANGUAGE_NAME\` should be replaced with your desired supported language name, such as ${this.languages
        .slice(0, 3)
        .map(lang => `\`${lang.name}\``)
        .join(", ")}, etc.`
    );
    */
    // builder.append(
    //   `See ${MarkdownBuilder.createLink(
    //     "Install",
    //     "#install"
    //   )} section below for how to determine absolute path to the exectuable.`
    // );

    return builder;
  }

  private get packagePeerDependencies(): string[] {
    return Object.keys(_.get(this.pkg, "peerDependencies", {}));
  }

  private appendUsageSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Usage", 2);
    const { beautifierName } = this;
    builder.append(
      `Add \`${beautifierName}\` to \`beautifiers\` language option.`
    );
    builder.append(
      `A \`.unibeautifyrc.json\` file would look like the following:`
    );
    const hasOnly1Language = this.languages.length === 1;
    const languageKey = hasOnly1Language ? this.languages[0].name : "LANGUAGE_NAME";

    builder.code(
      JSON.stringify(
        {
          [languageKey]: {
            beautifiers: [beautifierName],
          },
        },
        null,
        2
      ),
      "json"
    );

    if (!hasOnly1Language) {
      builder.note(
        `The \`LANGUAGE_NAME\` should be replaced with your desired supported language name, such as ${this.languages
          .slice(0, 3)
          .map(lang => `\`${lang.name}\``)
          .join(", ")}, etc.`
      );
    }

    /*
    if (this.languages.length === 1) {
      const languageName = this.languages[0].name;
      builder.code(
        JSON.stringify(
          {
            [languageName]: {
              beautifiers: [beautifierName],
            },
          },
          null,
          2
        ),
        "json"
      );
    } else {
      builder.code(
        JSON.stringify(
          {
            LANGUAGE_NAME: {
              beautifiers: [beautifierName],
            },
          },
          null,
          2
        ),
        "json"
      );
      builder.note(
        `The \`LANGUAGE_NAME\` should be replaced with your desired supported language name, such as ${this.languages
          .slice(0, 3)
          .map(lang => `\`${lang.name}\``)
          .join(", ")}, etc.`
      );
    }
    */

    const hasBeautifierOptions = this.beautifierOptionKeys.length > 0;
    const hasExecutables = this.executables.length > 0;
    if (hasBeautifierOptions || hasExecutables) {
      builder.header("Advanced", 3);
      if (hasBeautifierOptions) {
        builder.append(`The following beautifier option(s) are supported:`);
        builder.list(this.beautifierOptionKeys.map(key => `\`${key}\``));
        builder.append(
          `See ${MarkdownBuilder.createDocLink(
            "beautifier options",
          "options-for-beautifiers"
          )} docs for more information.\n`
        );
      }

      builder.append('Example advanced configuration:');
      // prefer_beautifier_config
      // const beautifierOptions: any = {
      //   // ...executableConfig,
      // };
      const beautifierOptions: any = this.beautifierOptionKeys.reduce(
        (options, key) => ({
          ...options,
          [key]: true,
        }),
        {}
      );

      this.executables.forEach((dep: ExecutableDependencyDefinition) => {
        const executableConfig = {
          [dep.name]: {
            path: fakePathForProgram(dep.program),
          },
        };
        // const beautifierOptions: any = {
        //   ...executableConfig,
        // };
        Object.assign(beautifierOptions, executableConfig);
      });

      builder.code(
        JSON.stringify(
          {
            [languageKey]: {
              beautifiers: [beautifierName],
              [beautifierName]: beautifierOptions,
            },
          },
          null,
          2
        ),
        "json"
      );
    }

    return builder;
  }
  private get beautifierOptionKeys(): string[] {
    const keys = [];
    if (this.canResolveConfig) {
      keys.push("prefer_beautifier_config");
    }
    return keys;
  }
  private get canResolveConfig(): boolean {
    return !!this.beautifier.resolveConfig;
  }
  private appendOptionsTable(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Options", 2);
    if (!this.hasOptions) {
      builder.append("No configuration options are supported.");
      builder.append(
        `The following languages are supported without options: ${this.languages
          .map(linkForLanguage)
          .join(", ")}.`
      );
      return builder;
    }
    /*
      | Option | CSS | Lang 2 |
      | --- | --- | --- |
      | Arrow Parens | &#10060; | &#9989; |
      */
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

  private appendFaqSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("FAQ", 2);

    // builder.header(`Should I use ${this.beautifierName}?`, 3);
    // builder.append(`${this.beautifierName} `);

    builder.header(`How to use ${this.beautifierName} in Atom, VSCode, and other editors?`, 3);
    builder.append(`See the ${MarkdownBuilder.createDocLink(
      "editor integration",
      "editors"
    )} documentation for installation instructions for your editor of choice.`);

    if (this.canResolveConfig) {
      builder.header(`How to use ${this.beautifierName} configuration file?`, 3);
      builder.append(`You can override Unibeautify configuration and use ${this.beautifierName}'s own configuration file instead with \`prefer_beautifier_config\` beautifier option.`);
      builder.code(
        JSON.stringify(
          {
            LANGUAGE_NAME: {
            beautifiers: [this.beautifierName],
            [this.beautifierName]: {
              prefer_beautifier_config: `path/to/${this.beautifierName}/config/file`
            },
          },
        },
        null,
        2
        ),
        "json"
      );
      builder.append(
        `See ${MarkdownBuilder.createDocLink(
          "beautifier options",
        "options-for-beautifiers"
        )} docs for more information.\n`
      );
    }

    builder.header(`How to enable ${this.beautifierName} to format on save?`, 3);
    builder.append(`See the ${MarkdownBuilder.createDocLink(
      "editor integration",
      "editors"
    )} documentation for format on save instructions for your editor of choice.`);

    builder.header(`How to run ${this.beautifierName} on all files?`, 3);
    builder.append(`You can run ${this.beautifierName} on all of your files for every commit with ${MarkdownBuilder.createLink(
      'Unibeautify CI',
      'https://github.com/apps/unibeautify-ci',
    )}.`);

    builder.header(`Is there a ${this.beautifierName} sandbox or playground?`, 3);
    builder.append(`You can quickly try ${this.beautifierName} online with ${MarkdownBuilder.createLink(
      'Unibeautify Playground',
      'https://playground.unibeautify.com/'
    )}.`);

    return builder;
  }

  private get repoBadges(): Badge[] {
    return badgesForRepository(this.repository);
  }
  private get repository(): {
    type: string;
    user: string;
    project: string;
  } {
    return getPkgRepo(this.pkg);
  }
  private get pkg(): object | undefined {
    return this.beautifier.package;
  }
  private get badges(): Badge[] {
    return this.beautifier.badges || [];
  }
  protected get customEditUrl() {
    return `${websiteEditUrl}/scripts/generate-docs/BeautifierDoc.ts`;
  }
  protected get homepageUrl() {
    return _.get(this.pkg, "homepage");
  }
  private get beautifierName(): string {
    return this.beautifier.name;
  }
  private get dependencies(): DependencyDefinition[] {
    return this.beautifier.dependencies || [];
  }
  private get hasOptions(): boolean {
    return !Object.keys(this.optionsLookup).every(
      key => Object.keys(this.optionsLookup[key]).length === 0
    );
  }
}
interface OptionsLookup {
  [languageName: string]: OptionsRegistry;
}

function fakePathForProgram(program: string): string {
  return `/absolute/path/to/${program}`;
}
