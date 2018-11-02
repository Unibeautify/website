import { Badge } from "unibeautify";

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
    return this.append(text + "\n");
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
  public append(...texts: string[]): MarkdownBuilder {
    this.contents.push(...texts);
    return this;
  }
  public note(text: string): MarkdownBuilder {
    this.append(`> **Note:** ${text}`);
    return this;
  }
  public editButton(text: string, url: string): MarkdownBuilder {
    const button = `<a class="edit-page-link button" href="${url}" target="_blank">${text}</a>`;
    this.append(`<div>${button}</div>`);
    this.append("");
    return this;
  }
  public appendBadges(badges: Badge[]): MarkdownBuilder {
    if (badges.length > 0) {
      badges
        .map(badge => MarkdownBuilder.createBadge(badge))
        .forEach(badge => this.append(badge));
      this.append("");
    }
    return this;
  }
  public static createDocLink(
    text: string,
    docId: string,
    queryParam?: string
  ): string {
    let dest: string = `/docs/${docId}.html`;
    if (queryParam) {
      dest += `?${queryParam}`;
    }
    return this.createLink(text, dest);
  }
  public static createBadge(badge: Badge): string {
    const { url, href, description } = badge;
    return `<a href="${href}"><img class="badge" style="display: inline;" src="${url}" alt="${description}"></a>`;
  }
  public static createImage(imageUrl: string, altText: string = "image") {
    return `![${altText}](${imageUrl})`;
  }
  public static createLink(text: string, dest: string): string {
    return `[${text}](${dest})`;
  }
  public static createProgressBar(options: {
    value: number;
    scale?: number;
    title?: string;
    suffix?: string;
  }): string {
    const baseUrl = "http://progressed.io/bar/";
    const queryParams: string[] = Object.keys(options).reduce((query, key) => {
      if (key === "value") {
        return query;
      }
      const val = options[key];
      return val !== undefined ? [...query, `${key}=${val}`] : query;
    }, []);

    return `![progress](${baseUrl}${options.value}?${queryParams.join("&")})`;
  }
  public static bold(text: string): string {
    return `**${text}**`;
  }
}
