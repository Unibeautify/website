import { slugify } from "./utils";

export default abstract class Doc {
  protected get id(): string {
    return `${this.prefix}${this.slug}`;
  }

  public get fileName(): string {
    const title = this.title.toLowerCase().replace(/ /g, "-");
    return `${this.prefix}${title}.md`;
  }

  protected abstract get prefix(): string;

  protected get slug(): string {
    return slugify(this.title);
  }

  protected abstract get title(): string;

  protected abstract get body(): string | Promise<string>;

  public get contents(): Promise<string> {
    return Promise.resolve(this.body).then(
      body => this.frontMatter + "\n" + body
    );
  }

  protected get frontMatter(): string {
    return ["---", `id: ${this.id}`, `title: ${this.title}`, "---"].join("\n");
  }
}
