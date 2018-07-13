import GlobalUnibeautify, {
  Option,
  Language,
  Beautifier,
  BeautifierOptionName,
} from "unibeautify";
import * as path from "path";
import * as fs from "fs";
import * as JsDiff from "diff";

import {
  optionKeyToTitle,
  linkForLanguage,
  linkForBeautifier,
  unibeautifyWithBeautifier,
  emojis,
  websiteEditUrl,
  coreOptionsEditUrl,
} from "./utils";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";

const editBeautifiersUrl = `${websiteEditUrl}/scripts/generate-docs/beautifiers.ts`;

export default class OptionsDoc extends Doc {
  private readonly languages: Language[];
  private readonly beautifiers: Beautifier[];
  private readonly languageEditURL: string = "https://github.com/unibeautify/ugly-samples/edit/master";

  constructor(
    private option: Option,
    private optionKey: BeautifierOptionName,
    allBeautifiers: Beautifier[],
  ) {
    super();
    this.languages = GlobalUnibeautify.getLanguagesSupportingOption(optionKey);
    this.beautifiers = GlobalUnibeautify.getBeautifiersSupportingOption(
      optionKey,
    );
  }

  public get prefix(): string {
    return "option-";
  }

  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }

  public get title(): string {
    let title: string = this.option.title || "";
    if (!this.option.title) {
      title = optionKeyToTitle(this.optionKey);
    }
    return title;
  }

  protected get customEditUrl() {
    return coreOptionsEditUrl;
  }

  private get hasSupport(): boolean {
    return Boolean(this.beautifiers.length && this.languages.length);
  }

  protected get body() {
    const builder = new MarkdownBuilder();
    builder.append(`**Config Key**: \`${this.optionKey}\`\n`);
    builder.append(`**Description**: ${this.option.description}\n`);
    if (this.option.deprecated) {
      builder.append(
        `**Deprecated since version**: ${this.option.deprecated}\n`,
      );
    }
    const currentUnibeautifyVersionBadge = MarkdownBuilder.createBadge({
      description: "npm",
      url: "https://img.shields.io/npm/v/unibeautify.svg",
      href: "https://www.npmjs.com/package/unibeautify",
    });
    builder.append(
      `**Available since version**: ${
        this.option.since
      } (**Current:** ${currentUnibeautifyVersionBadge})\n`,
    );
    builder.append(`**Type**: \`${this.type}\`\n`);
    builder.append(`**Default**: \`${JSON.stringify(this.option.default)}\`\n`);
    if (this.option.enum) {
      builder.append(
        `**Allowed values**: ${this.option.enum
          .map(val => "`" + JSON.stringify(val) + "`")
          .join(" or ")}\n`,
      );
    }

    builder.header("Support", 2);
    if (this.hasSupport) {
      builder.editButton("Edit Beautifiers", editBeautifiersUrl);
      builder.append(
        `**Languages**: ${this.languages.map(linkForLanguage).join(", ")}\n`,
      );
      builder.append(
        `**Beautifiers**: ${this.beautifiers
          .map(linkForBeautifier)
          .join(", ")}\n`,
      );
      builder.details("<strong>Comparison Table</strong>", builder => {
        this.appendTable(builder);
      });
      return this.appendExamples(builder).then(() => builder.build());
    } else {
      builder.editButton("Add Beautifier", editBeautifiersUrl);
      builder.append("No language or beautifier support!");
      return builder.build();
    }
  }

  private get type(): string {
    if (this.option.type === "array") {
      if (this.option.items && this.option.items.type) {
        return `${this.option.type} of ${this.option.items.type}s`;
      }
    }
    return this.option.type;
  }

  private appendTable(builder: MarkdownBuilder): MarkdownBuilder {
    /*
    | Language | Beautifier 1 | Beautifier 2 |
    | --- | --- | --- |
    | Arrow Parens | &#10060; | &#9989; |
    */

    if (!this.hasSupport) {
      return builder;
    }

    builder.append(
      "| Language |" +
        this.beautifiers
          .map(beautifier => ` ${linkForBeautifier(beautifier)} |`)
          .join(""),
    );
    builder.append("| --- |" + this.beautifiers.map(b => ` --- |`).join(""));
    this.languages.forEach(language => {
      let row = `| ${linkForLanguage(language)} |`;
      this.beautifiers.forEach(beautifier => {
        const isSupported: boolean = GlobalUnibeautify.doesBeautifierSupportOptionForLanguage(
          {
            beautifier,
            language,
            optionName: this.optionKey,
          },
        );
        const symbol = isSupported ? emojis.checkmark : emojis.x;
        row += ` ${symbol} |`;
      });
      builder.append(row);
    });

    return builder;
  }

  private appendExamples(builder: MarkdownBuilder): Promise<MarkdownBuilder> {
    const { languages } = this;
    return Promise.all(languages.map(language => this.readExample(language)))
      .then(examples =>
        examples.reduce(
          (final, example, index) =>
            example
              ? {
                  ...final,
                  [languages[index].name]: example,
                }
              : final,
          {} as { [languageName: string]: string | undefined },
        ),
      )
      .then(examplesForLanguages => {
        return Promise.all(
          this.exampleValues.map(optionValue =>
            Promise.all<string | null>(
              languages.map(language => {
                const example = examplesForLanguages[language.name];
                if (example) {
                  return this.beautify(language, optionValue, example);
                } else {
                  return null;
                }
              }),
            ),
          ),
        ).then(beautified => {
          builder.header("Examples", 2);
          builder.append(
            '<div class="input-group languages-select"><div class="input-group-prepend">',
          );
          builder.append(
            '<label class="input-group-text" for="languages-select">Select Language:</label>',
          );
          builder.append(
            '</div><select class="custom-select" id="languages-select">',
          );
          let defaultDisplay: string;
          let isDefault: boolean = true;
          this.languages.forEach(language => {
            const example = examplesForLanguages[language.name];
            builder.append(
              `<option ${
                example && isDefault ? 'selected="selected"' : ""
              } data-text="${
                language.name
              }" value="${language.name
                .toLowerCase()
                .replace(/ /g, "")}">${language.name +
                (example ? " *" : "")}</option>`,
            );
            if (example && isDefault) {
              defaultDisplay = language.name;
              isDefault = false;
            }
          });
          builder.append(`</select><div class="select__arrow"></div></div>`);
          this.languages.forEach((language, languageIndex) => {
            const example = examplesForLanguages[language.name];
            builder.append(
              `<div class="exampleCode${
                language.name === defaultDisplay ? "" : " hidden"
              }" id="example-${language.name
                .toLowerCase()
                .replace(/ /g, "")}">\n`,
            );
            if (example) {
              builder.editButton(
                `Edit ${language.name} Example`,
                this.editExampleButtonUrl(language),
              );
              builder.append("<strong>🚧 Original Code</strong>");
              builder.code(example, language.name);
              let beautifiedExamplesAreDifferent: boolean = false;
              let lastCode: string | null = null;
              this.exampleValues.forEach((optionValue, valueIndex) => {
                builder.append(
                  `<strong>🔧 \`${JSON.stringify(optionValue)}\`</strong>`,
                );
                const beautifiedExample: string | null =
                  beautified[valueIndex][languageIndex];
                if (beautifiedExample) {
                  if (lastCode === null) {
                    lastCode = beautifiedExample;
                  } else {
                    if (lastCode !== beautifiedExample) {
                      lastCode = beautifiedExample;
                      beautifiedExamplesAreDifferent = true;
                    }
                  }

                  const diff = diffExample(
                    example,
                    beautifiedExample,
                    optionValue,
                  );
                  const configForExample = this.createOptionsWithLanguageAndValue(
                    language,
                    optionValue,
                  );
                  const beautifier = this.beautifierForLanguage(language);
                  if (beautifier) {
                    builder.append(
                      `\nUsing ${linkForBeautifier(beautifier)} beautifier:`,
                    );
                  }
                  builder.code(beautifiedExample, language.name);
                  builder.details("How to configure", builder => {
                    builder.append(
                      `A \`.unibeautify.json\` file would look like the following:`,
                    );
                    builder.json(configForExample);
                  });
                  builder.details("Difference from original", builder => {
                    builder.code(diff, "diff");
                  });
                  builder.append("");
                }
              });

              if (
                this.exampleValues.length > 1 &&
                !beautifiedExamplesAreDifferent
              ) {
                console.log(
                  `${this.optionKey} - ${language.name} - BAD EXAMPLES`,
                );
              }
            } else {
              builder.editButton(
                `Add ${language.name} Example`,
                this.addExampleButtonUrl(language),
              );
              builder.append("No example found. Please submit a Pull Request!");
            }
            builder.append(`</div>`);
          });
        });
      })
      .then(() => builder);
  }

  private get exampleValues(): any[] {
    const { option } = this;
    if (option.enum) {
      return option.enum;
    }
    switch (option.type) {
      case "boolean":
        return [true, false];
      case "integer": {
        const min = option.minimum || 0;
        const max = option.maximum || option.default * 2;
        return [option.default, min, max].sort();
      }
      case "array": {
        return [[], option.default];
      }
      default:
        return [option.default];
    }
  }

  private readExample(language: Language): string | undefined {
    const exampleExtension = ".txt";
    const examplePath = path.join(
      this.examplesPath,
      language.name,
      `${this.optionKey}${exampleExtension}`,
    );
    try {
      return fs.readFileSync(examplePath).toString();
    } catch (error) {
      return undefined;
    }
  }

  private get examplesPath(): string {
    return path.resolve(require("ugly-samples"));
  }

  private createOptionsWithLanguageAndValue(
    language: Language,
    optionValue: any,
  ) {
    return {
      [language.name]: this.createOptionValues(optionValue),
    };
  }

  private createOptionValues(optionValue: any) {
    return {
      indent_size: 2,
      indent_char: " ",
      [this.optionKey]: optionValue,
    };
  }

  private beautify(
    language: Language,
    optionValue: any,
    text: string,
  ): Promise<string> {
    const configForExample = this.createOptionsWithLanguageAndValue(
      language,
      optionValue,
    );
    const beautifier = this.beautifierForLanguage(language);
    if (beautifier) {
      const unibeautify = unibeautifyWithBeautifier(beautifier);
      return unibeautify.beautify({
        languageName: language.name,
        options: configForExample,
        text,
      });
    }
    return Promise.reject(
      new Error(`No beautifier supports option ${this.optionKey}.`),
    );
  }

  private beautifierForLanguage(language: Language): Beautifier | undefined {
    return this.beautifiers.filter(beautifier =>
      GlobalUnibeautify.doesBeautifierSupportOptionForLanguage({
        beautifier,
        language,
        optionName: this.optionKey,
      }),
    )[0];
  }

  private editExampleButtonUrl(language: Language): string {
    return `${this.languageEditURL}/samples/${language.name}/${
      this.optionKey
    }.txt`;
  }

  private addExampleButtonUrl(language: Language): string {
    return `${this.languageEditURL.replace(
      "/edit/",
      "/new/",
    )}/samples/${encodeURIComponent(language.name)}/new?filename=${
      this.optionKey
    }.txt&value=Type%20Example%20Here`;
  }
}

function diffExample(
  originalText: string,
  beautifiedText: string,
  fileName: string,
) {
  const oldHeader = "Original";
  const newHeader = "Beautified";
  return JsDiff.createPatch(
    fileName,
    showInvisibles(originalText),
    showInvisibles(beautifiedText),
    oldHeader,
    newHeader,
  );
}

const invisibles = {
  carriageReturn: "␍", // \r
  newLine: "␊", // \n
  tab: "↹", // \t
  whitespace: "␣",
};
function showInvisibles(text: string): string {
  return (
    text
      // Replace Newlines
      .replace(
        /(?:\r\n)/g,
        `${invisibles.carriageReturn}${invisibles.newLine}\n`,
      )
      .replace(/(?:\r)/g, `${invisibles.carriageReturn}\n`)
      .replace(/(?:\n)/g, `${invisibles.newLine}\n`)
      // Replace tabs
      .replace(/(?:\t)/g, "↹")
      // Replace spaces
      .replace(/(?:\ )/g, "␣")
  );
}
