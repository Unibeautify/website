import { Language, Beautifier } from "unibeautify";

import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";

export default class LanguageDoc extends Doc {
  constructor(private language: Language, private beautifiers: Beautifier[]) {
    super();
  }

  public get prefix(): string {
    return "language-";
  }

  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }

  public get title(): string {
    return this.language.name;
  }

  protected get body(): string {
    return new MarkdownBuilder()
      .header("Beautifiers", 2)
      .list(this.beautifiers.map(this.linkForBeautifier))
      .build();
  }

  private linkForBeautifier = (beautifier: Beautifier): string => {
    const docId = `beautifier-${this.slugify(beautifier.name)}`;
    return MarkdownBuilder.createDocLink(beautifier.name, docId);
  };
}
