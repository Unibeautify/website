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
    builder.header("Options", 2);
    this.appendOptionsTable(builder);
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
    builder.append("Please install the following prerequisites:");
    const depLinks = dependencies.map((dep: ExecutableDependencyDefinition) =>
      MarkdownBuilder.createDocLink(
        dep.name,
        `executable-${slugify(this.beautifierName)}-${slugify(dep.name)}`
      )
    );
    builder.list(depLinks);
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

    if (this.beautifierOptionKeys.length > 0) {
      builder.header("Advanced", 3);
      builder.append(`The following beautifier option(s) are supported:`);
      builder.list(this.beautifierOptionKeys.map(key => `\`${key}\``));
      builder.append(
        `See ${MarkdownBuilder.createDocLink(
          "beautifier options",
          "options-for-beautifiers"
        )} docs for more information.`
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
    if (!this.hasOptions) {
      builder.append("No configuration options are supported.");
      builder.append(`The following languages are supported without options: ${this.languages.map(lang => `\`${lang.name}\``).join(', ')}.`);
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
