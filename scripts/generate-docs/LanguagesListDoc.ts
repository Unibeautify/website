import Unibeautify, { Language } from "unibeautify";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import {
  coreLanguagesEditUrl,
  globsForLanguage,
  linkForBeautifier,
  linkForLanguage,
} from "./utils";
export default class LanguagesListDoc extends Doc {
  constructor(private languages: Language[]) {
    super();
  }
  public get title(): string {
    return "Supported Languages";
  }
  protected get id(): string {
    return "languages";
  }
  public get fileName(): string {
    return `${this.id}.md`;
  }
  public get prefix(): string {
    return "";
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.append(
      "Click on an language or beautifier title below for more information including " +
        "configuration and examples."
    );
    builder.append("| # | Language | Beautifiers | Options | File Patterns |");
    builder.append("| --- | --- | --- | --- | --- |");
    this.languages.forEach((language, index) => {
      const globs = globsForLanguage(language);
      const patterns = globs.map(glob => `\`${glob}\``).join(", ");
      const beautifiers = Unibeautify.getBeautifiersForLanguage(language);
      const beautifierNames = beautifiers
        .map(linkForBeautifier)
        .sort()
        .join(", ");
      const options = Unibeautify.getOptionsSupportedForLanguage(language);
      const numOfOptions = Object.keys(options).length;

      const row = `| ${index + 1} | ${linkForLanguage(
        language
      )} | ${beautifierNames} | ${numOfOptions} | ${patterns} |`;
      builder.append(row);
    });
    return builder.build();
  }
  protected get customEditUrl() {
    return coreLanguagesEditUrl;
  }
}
