import { slugify } from "./utils";
export default abstract class Doc {
  protected get id(): string {
    return `${this.prefix}${this.slug}`;
  }
  public get fileName(): string {
    const title = this.title
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/\+/g, "-");
    return `${this.prefix}${title}.md`;
  }
  protected abstract get prefix(): string;
  protected get slug(): string {
    return slugify(this.title);
  }
  protected abstract get title(): string;
  protected get sidebarLabel(): string | Promise<string> {
    return this.title;
  }
  protected get customEditUrl(): string | undefined {
    return undefined;
  }
  protected abstract get body(): string | Promise<string>;
  public get contents(): Promise<string> {
    return Promise.all([this.frontMatter, this.body]).then(
      ([frontMatter, body]) => frontMatter + "\n" + body,
    );
  }
  protected get frontMatter(): Promise<string> {
    return Promise.all([this.id, this.title, this.sidebarLabel]).then(
      ([id, title, sidebarLabel]) =>
        [
          "---",
          `id: ${id}`,
          `title: ${title}`,
          `sidebar_label: ${sidebarLabel}`,
          this.customEditUrl ? `custom_edit_url: ${this.customEditUrl}` : "",
          "---",
        ].join("\n"),
    );
  }
}
