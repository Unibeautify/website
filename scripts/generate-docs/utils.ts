import {
  Option,
  Language,
  Beautifier,
  Unibeautify,
  newUnibeautify,
  Badge,
} from "unibeautify";
import * as _ from "lodash";
import MarkdownBuilder from "./MarkdownBuilder";
const siteConfig = require("../../website/siteConfig.js");

export const websiteEditUrl = `${siteConfig.editUrl}../`;
export const coreEditUrl = `${siteConfig.githubUrl}/edit/master/`;
export const coreOptionsEditUrl = `${coreEditUrl}/src/options.ts`;
export const coreLanguagesEditUrl = `${coreEditUrl}/src/languages.json`;

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
      .replace("c#", "csharp")
      .replace("c++", "cpp")
      .replace(/ /g, "-")
      .replace(/\+/g, "-")
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

export function badgesForRepository(repository: {
  type: string;
  user: string;
  project: string;
}): Badge[] {
  switch (repository.type) {
    case "github":
      return [
        {
          description: "GitHub Stars",
          url: `https://img.shields.io/github/stars/${repository.user}/${
            repository.project
          }.svg?style=flat-square`,
          href: `https://github.com/${repository.user}/${
            repository.project
          }/stargazers`,
        },
        {
          description: "GitHub Issues",
          url: `https://img.shields.io/github/issues/${repository.user}/${
            repository.project
          }.svg?style=flat-square`,
          href: `https://github.com/${repository.user}/${
            repository.project
          }/issues`,
        },
      ];
    default:
      return [];
  }
}

export function globsForLanguage(language: Language): string[] {
  return [
    ...globsForFileNames(language.fileNames),
    ...globsForExtensions(language.extensions),
  ];
}

function globsForExtensions(extensions: string[] = []): string[] {
  return extensions.map(ext => `**/*${ext}`);
}

function globsForFileNames(fileNames: string[] = []): string[] {
  return fileNames.map(fileName => `**/${fileName}`);
}
