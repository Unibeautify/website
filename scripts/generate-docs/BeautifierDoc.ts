import Unibeautify, {
  Language,
  Beautifier,
  Option,
  OptionsRegistry,
  BeautifierOptionName,
  BeautifyOptionTransformSingleFunction,
  BeautifyOptionTransform,
  BeautifierLanguageOptionComplex
} from "unibeautify";
import * as _ from "lodash";

import { slugify, optionKeyToTitle } from "./utils";
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
        this.languages.map(lang => ` ${this.linkForLanguage(lang)} |`).join("")
    );
    builder.append("| --- |" + this.languages.map(lang => ` --- |`).join(""));
    const symbols = {
      x: "&#10060;",
      checkmark: "&#9989;"
    };
    Object.keys(this.allOptions).forEach(optionKey => {
      const option = this.allOptions[optionKey];
      let row = `| ${this.linkForOption(optionKey, option)} |`;
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
        options: this.options(language)
      }))
      .reduce(
        (lookup, { language, options }) => ({
          ...lookup,
          [language.name]: options
        }),
        {}
      );
  }

  private options(language: Language): OptionsRegistry {
    const keys = this.optionKeys(language);
    const allOptions = this.allOptions;
    return keys.reduce((options, key) => {
      const option = allOptions[key];
      if (!option) {
        return options;
      }
      return {
        ...options,
        [key]: option
      };
    }, {});
  }

  private optionKeys(language: Language): BeautifierOptionName[] {
    const beautifier = this.beautifier;
    const globalOptions = beautifier.options._;
    let beautifierOptions = beautifier.options[language.name];
    // Global options
    if (typeof globalOptions === "object") {
      if (beautifierOptions === true) {
        beautifierOptions = globalOptions;
      } else if (typeof beautifierOptions === "object") {
        beautifierOptions = Object.assign({}, globalOptions, beautifierOptions);
      }
    }
    // Transform options
    if (typeof beautifierOptions === "boolean") {
      return [];
    } else if (typeof beautifierOptions === "object") {
      const options: BeautifierOptionName[] = [];
      // const transformedOptions: OptionValues = {};
      Object.keys(beautifierOptions).forEach(fieldKey => {
        const op = (<BeautifierLanguageOptionComplex>beautifierOptions)[
          fieldKey
        ];
        if (typeof op === "string") {
          options.push(op);
        } else if (isOptionTransformSingleFunction(op)) {
          options.push(fieldKey as BeautifierOptionName);
        } else if (typeof op === "boolean") {
          if (op === true) {
            options.push(fieldKey as BeautifierOptionName);
          }
        } else if (isOptionTransform(op)) {
          options.push(...op[0]);
        }
      });
      return options;
    } else {
      return [];
    }
  }

  private get allOptions(): OptionsRegistry {
    return (Unibeautify as any).options;
  }

  private linkForLanguage = (language: Language): string => {
    const docId = `language-${slugify(language.name)}`;
    return MarkdownBuilder.createDocLink(language.name, docId);
  };

  private linkForOption = (key: string, option: Option): string => {
    const title: string = optionKeyToTitle(option.title || key);
    const docId = `option-${slugify(title)}`;
    return MarkdownBuilder.createDocLink(title, docId);
  };
}

function isOptionTransformSingleFunction(
  option: any
): option is BeautifyOptionTransformSingleFunction {
  return typeof option === "function";
}

function isOptionTransform(option: any): option is BeautifyOptionTransform {
  return Array.isArray(option);
}

interface OptionsLookup {
  [languageName: string]: OptionsRegistry;
}
