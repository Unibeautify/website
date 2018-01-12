import { Language, Beautifier } from "unibeautify";

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
    return new MarkdownBuilder()
      .header("Languages", 2)
      .list(this.languages.map(this.linkForLanguage))
      .build();
  }

  private linkForLanguage = (language: Language): string => {
    const docId = `language-${this.slugify(language.name)}`;
    return MarkdownBuilder.createDocLink(language.name, docId);
  };
}
