export default class MarkdownBuilder {
  private contents: string[] = [];

  public build(): string {
    return this.contents.join("\n");
  }

  public header(text: string, level: number = 1, toc: boolean = false): MarkdownBuilder {
    const prefix = "#".repeat(level);
    if(toc === true) {
      return this.append(`${prefix} \`${text}\`\n`);
    }
    return this.append(`${prefix} ${text}`);
  }

  public list(items: string[]): MarkdownBuilder {
    const text = items.map(item => `- ${item}`).join("\n");
    return this.append(text);
  }

  public append(text: string): MarkdownBuilder {
    this.contents.push(text);
    return this;
  }

  public static createDocLink(text: string, docId: string): string {
    return this.createLink(text, `/docs/${docId}.html`);
  }

  public static createLink(text: string, dest: string): string {
    return `[${text}](${dest})`;
  }
}
