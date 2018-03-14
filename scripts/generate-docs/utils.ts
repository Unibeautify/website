import {
  Option,
  Language,
  Beautifier,
  Unibeautify,
  newUnibeautify,
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
      .replace(/\+/g, "-")
      .replace("#", "sharp")
  );
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
