import Unibeautify, { OptionsRegistry } from "unibeautify";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import {
  optionKeyToTitle,
  slugify,
  coreEditUrl,
  coreOptionsEditUrl,
} from "./utils";
export default class OptionsListDoc extends Doc {
  public get title(): string {
    return "Language Options";
  }
  protected get id(): string {
    return "options-for-languages";
  }
  public get prefix(): string {
    return "";
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.append(
      "Click on an option title below for more information including configuration an" +
        "d examples."
    );
    builder.append("| Title | Option Key | Description |");
    builder.append("| --- | --- | --- |");
    const options: OptionsRegistry = this.allOptions;
    Object.keys(options).forEach(key => {
      const option = options[key];
      let title: string = option.title || "";
      if (!title) {
        title = optionKeyToTitle(key);
      }
      const optionId = `option-${slugify(title)}`;
      let titleLink: string = MarkdownBuilder.createDocLink(title, optionId);
      let row = `| **${titleLink}** | \`${key}\` | ${option.description.replace(
        /\|/g,
        "&#124;"
      )} |`;
      builder.append(row);
    });
    return builder.build();
  }
  public get allOptions(): OptionsRegistry {
    return Unibeautify.loadedOptions;
  }
  protected get customEditUrl() {
    return coreOptionsEditUrl;
  }
}
