import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  BeautifierOptionName,
} from "unibeautify";
import * as _ from "lodash";
import { optionKeys, linkForLanguage, linkForOption, emojis } from "./utils";
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
    this.appendUsageSection(builder);
    builder.header("Options", 2);
    this.appendOptionsTable(builder);
    return builder.build();
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
    const keys: BeautifierOptionName[] = optionKeys(this.beautifier, language);
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
  [languageName: string]: OptionsRegistry;
}
