import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  Badge,
} from "unibeautify";
import * as _ from "lodash";
const getPkgRepo = require("get-pkg-repo");

import {
  linkForBeautifier,
  linkForOption,
  emojis,
  coreLanguagesEditUrl,
  badgesForRepository,
  globsForLanguage,
} from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
export default class LanguageDoc extends Doc {
  private readonly optionsLookup: OptionsLookup;
  private readonly beautifiers: Beautifier[];
  constructor(private language: Language, beautifiers: Beautifier[]) {
    super();
    this.beautifiers = _.sortBy(beautifiers, "name");
    this.optionsLookup = this.createOptionsLookup();
  }
  public get prefix(): string {
    return "language-";
  }
  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }
  public get title(): string {
    return this.language.name;
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    this.appendSelectorInfo(builder);
    this.appendSupportedBeautifiers(builder);
    this.appendOptionsTable(builder);
    return builder.build();
  }
  private appendSelectorInfo(builder: MarkdownBuilder) {
    const {
      atomGrammars = [],
      vscodeLanguages = [],
      sublimeSyntaxes = [],
    } = this.language;
    if (atomGrammars.length) {
      builder.append(
        `**[Atom](https://atom.io/) Grammars**: ${atomGrammars.join(", ")}\n`
      );
    }
    if (vscodeLanguages.length) {
      builder.append(
        `**[VSCode](https://code.visualstudio.com/) Languages**: ${vscodeLanguages.join(
          ", "
        )}\n`
      );
    }
    if (sublimeSyntaxes.length) {
      builder.append(
        `**[Sublime Text](https://www.sublimetext.com/) Syntaxes**: ${sublimeSyntaxes.join(
          ", "
        )}\n`
      );
    }
    const globs = globsForLanguage(this.language);
    const patterns = globs.map(glob => `\`${glob}\``).join(", ");
    builder.append(`**File Patterns**: ${patterns}\n`);
    return builder;
  }
  private appendSupportedBeautifiers(builder: MarkdownBuilder) {
    builder.header("Supported Beautifiers", 2);
    builder.append("| Beautifier | Options | Downloads | Stars | Issues |");
    builder.append("| --- | --- | --- | --- | --- |");
    this.beautifiers.forEach(beautifier => {
      const numOfOptions = Object.keys(this.optionsLookup[beautifier.name])
        .length;
      const packageName: string = _.get(beautifier.package, "name", "");
      const downloadsBadge: Badge = {
        url: `https://img.shields.io/npm/dm/${packageName}.svg?style=flat-square`,
        href: `https://www.npmjs.com/package/${packageName}`,
        description: `${packageName} npm downloads`,
      };
      const repository = getPkgRepo(beautifier.package);
      const [starsBadge, issuesBadge] = badgesForRepository(repository);
      builder.append(
        `| ${linkForBeautifier(
          beautifier
        )} | ${numOfOptions} | ${MarkdownBuilder.createBadge(
          downloadsBadge
        )} | ${MarkdownBuilder.createBadge(
          starsBadge
        )} | ${MarkdownBuilder.createBadge(issuesBadge)} |`
      );
    });
    return builder;
  }
  protected get customEditUrl() {
    return coreLanguagesEditUrl;
  }
  private appendOptionsTable(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Options", 2);
    builder.append(
      "| # | Option |" +
        this.beautifiers
          .map(beautifier => ` ${linkForBeautifier(beautifier)} |`)
          .join("")
    );
    builder.append(
      "| --- | --- |" + this.beautifiers.map(beautifier => ` --- |`).join("")
    );
    Object.keys(this.allOptions).reduce((count, optionKey) => {
      const option = this.allOptions[optionKey];
      let row = `| ${count} | ${linkForOption(
        optionKey,
        option,
        this.language.name
      )} |`;
      let isSupported = false;
      this.beautifiers.forEach(beautifier => {
        const beautifierSupportsOption: boolean = _.get(
          this.optionsLookup as any,
          `${beautifier.name}.${optionKey}`,
          false
        );
        const symbol = beautifierSupportsOption ? emojis.checkmark : emojis.x;
        row += ` ${symbol} |`;
        if (beautifierSupportsOption) {
          isSupported = true;
        }
      });
      if (isSupported) {
        builder.append(row);
        return count + 1;
      }
      return count;
    }, 1);
    return builder;
  }
  private createOptionsLookup(): OptionsLookup {
    return this.beautifiers
      .map(beautifier => ({ beautifier, options: this.options(beautifier) }))
      .reduce(
        (lookup, { beautifier, options }) => ({
          ...lookup,
          [beautifier.name]: options,
        }),
        {}
      );
  }
  private options(beautifier: Beautifier): OptionsRegistry {
    return Unibeautify.getOptionsSupportedByBeautifierForLanguage({
      beautifier,
      language: this.language,
    });
  }
  private get allOptions(): OptionsRegistry {
    return Unibeautify.loadedOptions;
  }
}
interface OptionsLookup {
  [beautifierName: string]: OptionsRegistry;
}
