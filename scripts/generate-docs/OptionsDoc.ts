import { Option } from "unibeautify";
import * as _ from "lodash";

import { optionKeyToTitle } from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";

export default class OptionsDoc extends Doc {
  constructor(private option: Option, private optionKey: string) {
    super();
  }

  public get prefix(): string {
    return "option-";
  }

  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }

  public get title(): string {
    let title: string = this.option.title || "";
    if(!this.option.title) {
      title = optionKeyToTitle(this.optionKey);
    }
    return title;
  }

  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.append(`**Description**: ${this.option.description}\n`);
    builder.append(`**Type**: \`${this.option.type}\`\n`);
    builder.append(`**Default**: \`${JSON.stringify(this.option.default)}\`\n`);
    if ()

    builder.code(JSON.stringify(this.option, null, 2));
    return builder.build();
  }

  private get isEnum(): boolean {
    return Boolean(this.option.enum && this.option.enum.length > 0);
  }

}