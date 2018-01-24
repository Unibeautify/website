import Unibeautify, {
  Option,
  OptionValues,
  Language,
  Beautifier,
  BeautifierOptionName,
  BeautifyOptionTransformSingleFunction,
  BeautifyOptionTransform,
  BeautifierLanguageOptionComplex,
} from "unibeautify";
import * as _ from "lodash";

import MarkdownBuilder from "./MarkdownBuilder";

export function optionKeyToTitle(key: string): string {
  return key
    .split("_")
    .map(_.capitalize)
    .join(" ");
}

export function slugify(title: string): string {
  return encodeURIComponent(
    title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace("#", "sharp")
  );
}

export function optionKeys(
  beautifier: Beautifier,
  language: Language
): BeautifierOptionName[] {
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
      const op = (<BeautifierLanguageOptionComplex>beautifierOptions)[fieldKey];
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

function isOptionTransformSingleFunction(
  option: any
): option is BeautifyOptionTransformSingleFunction {
  return typeof option === "function";
}

function isOptionTransform(option: any): option is BeautifyOptionTransform {
  return Array.isArray(option);
}

export function linkForBeautifier(beautifier: Beautifier): string {
  const docId = `beautifier-${slugify(beautifier.name)}`;
  return MarkdownBuilder.createDocLink(beautifier.name, docId);
}

export function linkForLanguage(language: Language): string {
  const docId = `language-${slugify(language.name)}`;
  return MarkdownBuilder.createDocLink(language.name, docId);
}

export function linkForOption(key: string, option: Option): string {
  const title: string = optionKeyToTitle(option.title || key);
  const docId = `option-${slugify(title)}`;
  return MarkdownBuilder.createDocLink(title, docId);
}

export function beautify(
  language: Language,
  options: OptionValues,
  text: string
): Promise<string> {
  const languageName = language.name;
  // console.log(`Before: ${languageName}`);
  // console.log(options);
  // console.log(text);
  return Unibeautify.beautify({
    languageName,
    options: {
      _: options,
      [languageName]: options,
    },
    text,
  });
  // .then(beautified => {
  //   console.log(`After: ${languageName}`);
  //   console.log(languageName);
  //   console.log(options);
  //   console.log(beautified);
  //   return beautified;
  // });
}