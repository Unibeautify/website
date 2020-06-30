import { OptionsRegistry } from "unibeautify";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import { optionKeyToTitle, slugify, coreOptionsEditUrl } from "./utils";
export default class OptionsListDoc extends Doc {
  constructor(private allOptions: OptionsRegistry) {
    super();
  }
  public get title(): string {
    return "Language Options";
  }
  protected get description(): string {
    return `Unibeautify supports ${
      Object.keys(this.allOptions).length
    } configuration options. Click on an option title below for more information including how to configure and examples.`;
  }
  protected get id(): string {
    return "options-for-languages";
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
      "Click on an option title below for more information including how to configure" +
        " and examples."
    );
    builder.append("| # | Title | Config Key | Description |");
    builder.append("| --- | --- | --- | --- |");
    const options: OptionsRegistry = this.allOptions;
    Object.keys(options).forEach((key, index) => {
      const option = options[key];
      let title: string = option.title || "";
      if (!title) {
        title = optionKeyToTitle(key);
      }
      const optionId = `option-${slugify(title)}`;
      let titleLink: string = MarkdownBuilder.createDocLink(title, optionId);
      let row = `| ${index +
        1} | **${titleLink}** | ${key} | ${option.description.replace(
        /\|/g,
        "&#124;"
      )} |`;
      builder.append(row);
    });
    return builder.build();
  }
  protected get customEditUrl() {
    return coreOptionsEditUrl;
  }
}
