import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  BeautifierOptionName,
} from "unibeautify";
import * as _ from "lodash";

import { optionKeys, linkForLanguage, linkForOption } from "./utils";
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
    // this.languages.forEach(lang => {
    //   builder.header(lang.name, 2);
    //   builder.append(
    //     "For more information click " + this.linkForLanguage(lang)
    //   );
    //   builder.header("Options", 3);
    //   builder.append("Lots of options!");
    //   const options = this.options(lang);
    //   Object.keys(options).forEach(key => {
    //     const option = options[key];
    //     let title: string = option.title || "";
    //     if (!title) {
    //       title = key.split('_').map(_.capitalize).join(' ');
    //     }
    //     builder.header(title, 3);
    //     builder.append(`**Key**: \`${key}\`\n`);
    //     builder.append(`**Type**: \`${option.type}\`\n`);
    //     builder.append(`**Default**: \`${JSON.stringify(option.default)}\`\n`);
    //     builder.append(`**Description**: ${option.description}\n`);
    //   });
    // });
    this.appendOptionsTable(builder);
    return builder.build();
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
    const symbols = {
      x: "&#10060;",
      checkmark: "&#9989;",
    };
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
        const symbol = languageSupportsOption ? symbols.checkmark : symbols.x;
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
      .map(language => ({
        language,
        options: this.options(language),
      }))
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
