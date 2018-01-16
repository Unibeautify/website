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

import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";

export default class BeautifierDoc extends Doc {
  constructor(private beautifier: Beautifier, private languages: Language[]) {
    super();
  }

  public get prefix(): string {
    return "beautifier-";
  }

  public get title(): string {
    return this.beautifier.name;
  }

  protected get body(): string {
    const builder = new MarkdownBuilder();
    // builder
    //   .header("Languages", 2)
    //   .list(this.languages.map(this.linkForLanguage));
    this.languages.forEach(lang => {
      builder.header(lang.name, 2);
      builder.append(
        "For more information click " + this.linkForLanguage(lang)
      );
      // builder.header("Options", 3);
      // builder.append("Lots of options!");
      const options = this.options(lang);
      // console.log(options);
      Object.keys(options).forEach(key => {
        const option = options[key];
        let title: string = option.title || "";
        if (!title) {
          title = key.split('_').map(_.capitalize).join(' ');
        }
        builder.header(title, 3);
        builder.append(`**Key**: \`${key}\`\n`);
        builder.append(`**Type**: \`${option.type}\`\n`);
        builder.append(`**Default**: \`${JSON.stringify(option.default)}\`\n`);
        builder.append(`**Description**: ${option.description}\n`);
      });
    });
    return builder.build();
  }

  private options(language: Language): OptionsRegistry {
    const keys = this.optionKeys(language);
    // console.log("Option keys", keys);
    const allOptions = this.allOptions;
    // return this.allOptions.filter(option => keys.indexOf(option.title) !== -1);
    // return keys.map(key => allOptions[key]);
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

  // private optionKeys(language: Language): string[] {
  //   // const beautifierOptions = this.beautifier.options;
  //   // console.log(
  //   //   "beautifierOptions",
  //   //   JSON.stringify(beautifierOptions, null, 2)
  //   // );
  //   // const defaultOptions = (beautifierOptions as any)["_"] || {};
  //   // const languageOptions = beautifierOptions[language.name] || {};
  //   // // const languageOptions = {
  //   // //   ...((beautifierOptions as any)["_"] || {}),
  //   // //   ...(beautifierOptions[language.name] || {}),
  //   // // };
  //   const languageOptions = this.optionKeys(language);
  //   console.log("languageOptions", JSON.stringify(languageOptions, null, 2));
  //   return Object.keys(languageOptions);
  // }

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
          // transformedOptions[fieldKey] = options[op];
        } else if (isOptionTransformSingleFunction(op)) {
          options.push(fieldKey as BeautifierOptionName);
          // transformedOptions[
          //   fieldKey
          // ] = op(options[fieldKey]);
        } else if (typeof op === "boolean") {
          if (op === true) {
            options.push(fieldKey as BeautifierOptionName);
            // transformedOptions[fieldKey] = options[fieldKey];
          }
        } else if (isOptionTransform(op)) {
          // const [fields, fn] = op;
          // const vals = fields.map(field => options[field]);
          // const obj = _.zipObject(fields, vals);
          // transformedOptions[fieldKey] = fn(obj);
          options.push(...op[0]);
        }
      });
      // return transformedOptions;
      return options;
    } else {
      return [];
    }
  }

  private get allOptions(): OptionsRegistry[] {
    return (Unibeautify as any).options;
  }

  private linkForLanguage = (language: Language): string => {
    const docId = `language-${this.slugify(language.name)}`;
    return MarkdownBuilder.createDocLink(language.name, docId);
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
