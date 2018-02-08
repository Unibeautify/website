import Unibeautify, { OptionsRegistry } from "unibeautify";
import * as _ from "lodash";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import { optionKeyToTitle, slugify } from "./utils";
export default class OptionsListDoc extends Doc {
  public get title(): string {
    return "Options";
  }
  public get prefix(): string {
    return "";
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.append("| Title | Option Key | Description |");
    builder.append("| --- | --- | --- |");
    const options = this.allOptions;
    Object.keys(options).forEach(key => {
      const option = options[key];
      let title: string = option.title || "";
      if (!title) {
        title = optionKeyToTitle(key);
      }
      const optionId = `option-${slugify(title)}`; //.replace(/_/g, "-");  `option-${key.replace(/_/g, "-")}`
      let titleLink: string = MarkdownBuilder.createDocLink(title, optionId);
      let row = `| **${titleLink}** | \`${key}\` | ${option.description.replace(
        /\|/g,
        "&#124;"
      )} |`;
      builder.append(row);
    });
    return builder.build();
  }
  public get allOptions(): OptionsRegistry[] {
    return (Unibeautify as any).options;
  }
}
