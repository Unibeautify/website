import Unibeautify, { Language, BeautifierOptionName } from "unibeautify";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import {
  websiteEditUrl,
  readExample,
  linkForOption,
  linkForLanguage,
  editExampleUrl,
  addExampleUrl,
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
    builder.append(
      "One of the objectives of Unibeautify is to provide an exceptional user experie" +
        "nce regardless of languages or beautifiers involved. Examples play an integral" +
        " role when demonstrating how configuring an option impacts the formatted code."
    );
    builder.note(
      "You can see below the coverage of examples for each language and option. Click" +
        " the &#9998; icon below to add/edit an example."
    );
    builder.append("\n");
    const progress: Progress = {};
    let totalOptions: number = 0;
    let optionsWithExamples: number = 0;
    this.languages.forEach(language => {
      const options = Unibeautify.getOptionsSupportedForLanguage(language);
      const optionsProgress: Progress[string] = Object.keys(options).reduce(
        (final, optionKey) => {
          const hasExample = !!readExample({
            language: language.name,
            optionKey,
          });
          final[optionKey] = hasExample;
          totalOptions++;
          optionsWithExamples += hasExample ? 1 : 0;
          return final;
        },
        {}
      );
      progress[language.name] = optionsProgress;
    });

    builder.append(
      "| Progress | # of Examples Completed | # of Examples Missing | # of Examples |"
    );
    builder.append("| --- | --- | --- | --- |");
    builder.append(
      `| ${MarkdownBuilder.createProgressBar({
        value: Math.floor(optionsWithExamples / totalOptions * 100),
      })} | ${optionsWithExamples} | ${totalOptions -
        optionsWithExamples} | ${totalOptions} |`
    );
    builder.append("\n");

    builder.append(
      "| # | Language | Progress | # of Examples | # of Options |"
    );
    builder.append("| --- | --- | --- | --- | --- |");

    const languageNames: string[] = Object.keys(progress);
    languageNames.forEach((languageName, index) => {
      const optionsProgress: Progress[string] = progress[languageName];
      const optionKeys: string[] = Object.keys(optionsProgress);
      const total = optionKeys.length;
      const count = optionKeys.reduce(
        (sum, key) => (optionsProgress[key] ? sum + 1 : sum),
        0
      );
      const perc = total ? Math.floor(count / total * 100) : 100;
      builder.append(
        `| ${index + 1} | ${linkForLanguage({
          name: languageName,
        })} | ${MarkdownBuilder.createProgressBar({
          value: perc,
        })} | ${count} | ${total} |`
      );
    });
    languageNames.forEach(languageName => {
      builder.header(languageName, 2);
      builder.append("\n");
      builder.append("| # | Option | Example | Edit |");
      builder.append("| --- | --- | --- | --- |");
      const optionsProgress: Progress[string] = progress[languageName];
      Object.keys(optionsProgress).forEach(
        (optionKey: BeautifierOptionName, index) => {
          const hasExample = optionsProgress[optionKey];
          const option = Unibeautify.loadedOptions[optionKey];
          const editUrl: string = hasExample
            ? editExampleUrl({ languageName, optionKey })
            : addExampleUrl({ languageName, optionKey });
          builder.append(
            `| ${index + 1} | ${linkForOption(
              optionKey,
              option,
              languageName
            )} | ${
              hasExample ? "&#9989;" : "&#10060;"
            } | [&#9998;](${editUrl}) |`
          );
        }
      );
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
