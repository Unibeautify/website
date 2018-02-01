import {
  Option,
  OptionValues,
  Language,
  Beautifier,
  BeautifierOptionName,
  BeautifyOptionTransformSingleFunction,
  BeautifyOptionTransform,
  BeautifierLanguageOptionComplex,
  LanguageOptionValues,
  Unibeautify,
  newUnibeautify,
} from "unibeautify";
import * as _ from "lodash";

import beautifiers from "./beautifiers";
import MarkdownBuilder from "./MarkdownBuilder";
import { beautifier } from "@unibeautify/beautifier-js-beautify";

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

export function unibeautifyWithBeautifier(beautifier: Beautifier): Unibeautify {
  return newUnibeautify().loadBeautifier(beautifier);
}

export const emojis = {
  x: "&#10060;",
  checkmark: "&#9989;",
};
