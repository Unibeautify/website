export default class MarkdownBuilder {
  private contents: string[] = [];
  public build(): string {
    return this.contents.join("\n");
  }
  public header(
    text: string,
    level: number = 1,
    toc: boolean = false
  ): MarkdownBuilder {
    const prefix = "#".repeat(level);
    if (toc === true) {
      return this.append(`${prefix} \`${text}\`\n`);
    }
    return this.append(`${prefix} ${text}`);
  }
  public list(items: string[]): MarkdownBuilder {
    const text = items.map(item => `- ${item}`).join("\n");
    return this.append(text);
  }
  public json(json: object) {
    return this.code(JSON.stringify(json, null, 2), "json");
  }
  public code(code: string, language: string = "") {
    return this.append("```" + language + "\n" + code + "\n```");
  }
  public details(summary: string, details: (builder: MarkdownBuilder) => void) {
    this.append(`<details><summary>${summary}</summary>`);
    details(this);
    this.append(`</details>`);
  }
  public append(text: string): MarkdownBuilder {
    this.contents.push(text);
    return this;
  }
  public editButton(text: string, url: string): MarkdownBuilder {
    const button = `<a class="edit-page-link button" href="${url}" target="_blank">${text}</a>`;
    this.append(`<div>${button}</div>`);
    this.append("");
    return this;
  }
  public static createDocLink(text: string, docId: string): string {
    return this.createLink(text, `/docs/${docId}.html`);
  }
  public static createLink(text: string, dest: string): string {
    return `[${text}](${dest})`;
  }
}
