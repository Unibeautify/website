import Unibeautify, { Language } from "unibeautify";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import {
  websiteEditUrl,
  readExample,
  linkForOption,
  linkForLanguage,
} from "./utils";
export default class ContributingExamplesDoc extends Doc {
  constructor(private languages: Language[]) {
    super();
  }
  public get title(): string {
    return "Contributing Examples";
  }
  public get sidebarLabel(): string {
    return "Examples";
  }
  protected get id(): string {
    return "contributing-examples";
  }
  public get fileName(): string {
    return `${this.id}.md`;
  }
  public get prefix(): string {
    return "";
  }
  protected get customEditUrl() {
    return `${websiteEditUrl}/scripts/generate-docs/ExamplesProgressDoc.ts`;
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.header("By Language", 2);
    builder.append("\n");
    builder.append(
      "| # | Language | Progress | # of Examples | # of Options |"
    );
    builder.append("| --- | --- | --- | --- | --- |");
    const progress: Progress = {};
    this.languages.forEach(language => {
      const options = Unibeautify.getOptionsSupportedForLanguage(language);
      const optionsProgress: Progress[string] = Object.keys(options).reduce(
        (final, optionKey) => {
          final[optionKey] = !!readExample({
            language: language.name,
            optionKey,
          });
          return final;
        },
        {}
      );
      progress[language.name] = optionsProgress;
    });
    Object.keys(progress).forEach((languageName, index) => {
      const optionsProgress: Progress[string] = progress[languageName];
      const total = Object.keys(optionsProgress).length;
      const count = Object.keys(optionsProgress).reduce(
        (sum, key) => (optionsProgress[key] ? sum + 1 : sum),
        0
      );
      const perc = total ? Math.floor((count / total) * 100) : 0;
      builder.append(
        `| ${index + 1} | ${linkForLanguage({
          name: languageName,
        })} | ![progress](http://progressed.io/bar/${perc}) | ${count} | ${total} |`
      );
    });
    Object.keys(progress).forEach(languageName => {
      builder.header(languageName, 3);
      builder.append("\n");
      builder.append("| # | Option | Example |");
      builder.append("| --- | --- | --- |");
      const optionsProgress: Progress[string] = progress[languageName];
      Object.keys(optionsProgress).forEach((optionKey, index) => {
        const hasExample = optionsProgress[optionKey];
        const option = Unibeautify.loadedOptions[optionKey];
        builder.append(
          `| ${index + 1} | ${linkForOption(
            optionKey,
            option,
            languageName
          )} | ${hasExample ? "&#9989;" : "&#10060;"} |`
        );
      });
      builder.append("\n");
    });
    return builder.build();
  }
}

interface Progress {
  [languageName: string]: {
    [optionName: string]: boolean;
  };
}
