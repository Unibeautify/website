import { Option } from "unibeautify";
import * as _ from "lodash";

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
      title = this.optionKey.split('_').map(_.capitalize).join(' ');
    }
    return title;
  }

  protected get body(): string {
    const builder = new MarkdownBuilder();
    builder.append(`**Description**: ${this.option.description}\n`);
    builder.append(`**Type**: \`${this.option.type}\`\n`);
    builder.append(`**Default**: \`${JSON.stringify(this.option.default)}\`\n`);
    return builder.build();
  }

}