import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
} from "unibeautify";
import * as _ from "lodash";
import {
  slugify,
  optionKeys,
  linkForBeautifier,
  linkForOption,
  emojis,
} from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import OptionsListDoc from "./OptionsListDoc";
export default class LanguageDoc extends Doc {
  private readonly optionsLookup: OptionsLookup;
  constructor(private language: Language, private beautifiers: Beautifier[]) {
    super();
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
    builder
      .header("Supported Beautifiers", 2)
      .list(this.beautifiers.map(this.linkForBeautifier));
    builder.header("Options", 2);
    this.appendOptionsTable(builder);
    return builder.build();
  }
  protected get frontMatter(): Promise<string> {
    return Promise.all([this.id, this.title, this.sidebarLabel]).then(
      ([id, title, sidebarLabel]) =>
        [
          "---",
          `id: ${id}`,
          `title: ${title}`,
          `sidebar_label: ${sidebarLabel}`,
          `edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/languages.json`,
          "---",
        ].join("\n"),
    );
  }
  private linkForBeautifier = (beautifier: Beautifier): string => {
    const docId = `beautifier-${slugify(beautifier.name)}`;
    return MarkdownBuilder.createDocLink(beautifier.name, docId);
  };
  private appendOptionsTable(builder: MarkdownBuilder): MarkdownBuilder {
    builder.append(
      "| Option |" +
        this.beautifiers
          .map(beautifier => ` ${linkForBeautifier(beautifier)} |`)
          .join(""),
    );
    builder.append(
      "| --- |" + this.beautifiers.map(beautifier => ` --- |`).join(""),
    );
    Object.keys(this.allOptions).forEach(optionKey => {
      const option = this.allOptions[optionKey];
      let row = `| ${linkForOption(optionKey, option)} |`;
      let isSupported = false;
      this.beautifiers.forEach(beautifier => {
        const beautifierSupportsOption: boolean = _.get(
          this.optionsLookup as any,
          `${beautifier.name}.${optionKey}`,
          false,
        );
        const symbol = beautifierSupportsOption ? emojis.checkmark : emojis.x;
        row += ` ${symbol} |`;
        if (beautifierSupportsOption) {
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
    return this.beautifiers
      .map(beautifier => ({ beautifier, options: this.options(beautifier) }))
      .reduce(
        (lookup, { beautifier, options }) => ({
          ...lookup,
          [beautifier.name]: options,
        }),
        {},
      );
  }
  private options(beautifier: Beautifier): OptionsRegistry {
    const keys = optionKeys(beautifier, this.language);
    const allOptions = this.allOptions;
    return keys.reduce((options, key) => {
      const option = allOptions[key];
      if (!option) {
        return options;
      }
      return {
        ...options,
        [key]: option,
      };
    }, {});
  }
  private get allOptions(): OptionsRegistry {
    return (Unibeautify as any).options;
  }
}
interface OptionsLookup {
  [beautifierName: string]: OptionsRegistry;
}
