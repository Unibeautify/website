import Unibeautify, {
  Language,
  Beautifier,
  OptionsRegistry,
  DependencyDefinition,
  DependencyType,
  ExecutableDependencyDefinition,
} from "unibeautify";
import * as _ from "lodash";
import Doc from "./Doc";
import MarkdownBuilder from "./MarkdownBuilder";
import { slugify } from "./utils";

export default class ExecutableDoc extends Doc {
  constructor(
    private executable: ExecutableDependencyDefinition,
    private beautifier: Beautifier,
    private languages: Language[],
  ) {
    super();
  }
  public get prefix(): string {
    return "executable-";
  }
  public get id(): string {
    return `${this.prefix}${this.slug}`;
  }
  public get title(): string {
    return `${this.executable.name} Executable`;
  }
  protected get slug(): string {
    return slugify(`${this.beautifier.name}-${this.executable.name}`);
  }
  public get beautifierName(): string {
    return this.beautifier.name;
  }
  private get dependencyName(): string {
    return this.executable.name;
  }
  protected get sidebarLabel(): string {
    return `${this.executable.name} Executable`;
  }
  protected get body(): string {
    const builder = new MarkdownBuilder();
    this.appendAboutSection(builder);
    this.appendUsageSection(builder);
    this.appendExecutableDependencySection(builder);
    return builder.build();
  }

  private appendAboutSection(builder: MarkdownBuilder): MarkdownBuilder {
    const dependency = this.executable;
    const beautifierName: string = this.beautifier.name;
    const dependencyName: string = dependency.name;
    builder.header(`About`, 2);
    const isConfusing =
      beautifierName.toLowerCase() === dependencyName.toLowerCase();
    if (isConfusing) {
      builder.append(
        `*${dependencyName} executable should not be confused with ${beautifierName} beautifier with the same name.*`,
      );
    }
    builder.append(
      `${dependencyName} executable is a third-party program you must install manually and is required for beautification.`,
    );
    return builder;
  }

  private appendExecutableDependencySection(
    builder: MarkdownBuilder,
  ): MarkdownBuilder {
    builder.header(`Install`, 2);
    builder.append("");
    builder.append(
      "Below are instructions for each of the supported Operating Systems.",
    );

    this.appendWindowsSection(builder);
    this.appendMacSection(builder);
    this.appendLinuxSection(builder);

    return builder;
  }

  private appendWindowsSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Windows", 3);
    builder.append(
      "[Open the Command Prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089).",
    );

    builder.append(
      '\n<p><iframe width="560" height="315" src="https://www.youtube.com/embed/MBBWVgE0ewk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>\n',
    );

    // builder.append("It looks like the following for Windows 7:");
    // builder.append(
    //   "![windows-7-command-prompt](/img/windows/windows-7-command-prompt.png)",
    // );
    // builder.append("And this for Windows 10:");

    // builder.append("It looks like the following for Windows 10:");
    // builder.append(
    //   "![windows-10-command-prompt](/img/windows/windows-10-command-prompt.png)",
    // );
    const dependency = this.executable;
    builder.append(
      `\nFind the path to ${this.dependencyName} by running the command:`,
    );
    builder.code(`where ${dependency.program}`, "batch");

    builder.append(
      "Which will return an absolute path like one of the following:",
    );
    const suffixes = ["", ".exe", ".bat"];
    builder.code(
      suffixes
        .map(suffix => `C:\\absolute\\path\\to\\${dependency.program}${suffix}`)
        .join("\n"),
      "text",
    );

    builder.append(
      "If `where` fails to return an executable path then you need to fix your `PATH` Environment Variable:",
    );
    builder.append(
      '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/8HK1BsRprt0?start=334" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
    );
    builder.append(
      `Once you successfully an executable path go to the ${MarkdownBuilder.createLink(
        "Configure",
        "#Configure",
      )} section.`,
    );
    builder.append(
      `Replace \`${fakePathForExecutable(
        dependency,
      )}\` with your specific executable path value.`,
    );
    return builder;
  }

  private appendMacSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("macOS", 3);
    const dependency = this.executable;
    // builder.append("![mac-terminal](/img/mac/mac-terminal.png)");
    builder.append("Open the Terminal application:");
    builder.append(
      '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/zw7Nd67_aFw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
    );

    builder.append(
      `\nFind the path to ${this.dependencyName} by running the command:`,
    );
    builder.code(`which ${dependency.program}`, "bash");

    builder.append(
      "Which will return an absolute path like one of the following:",
    );
    const suffixes = ["", ".sh", ".bash"];
    builder.code(
      suffixes
        .map(suffix => `/absolute/path/to/${dependency.program}${suffix}`)
        .join("\n"),
      "text",
    );

    builder.append(
      "If `which` fails to return an executable path then you need to fix your `PATH` Environment Variable:",
    );

    builder.append(
      '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/aYVEZTmBiuc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
    );

    builder.append(
      `Once you successfully an executable path go to the ${MarkdownBuilder.createLink(
        "Configure",
        "#Configure",
      )} section.`,
    );
    builder.append(
      `Replace \`${fakePathForExecutable(
        dependency,
      )}\` with your specific executable path value.`,
    );

    return builder;
  }

  private appendLinuxSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Linux", 3);
    const dependency = this.executable;
    builder.append("Open the Terminal application:");
    // builder.append(
    //   "![linux-terminal](/img/linux/linux-terminal-on-ubuntu.png)",
    // );
    builder.append(
      '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/AO0jzD1hpXc?start=28" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
    );

    builder.append(
      `\nFind the path to ${this.dependencyName} by running the command:`,
    );
    builder.code(`which ${dependency.program}`, "bash");

    builder.append(
      "Which will return an absolute path like one of the following:",
    );
    const suffixes = ["", ".sh", ".bash"];
    builder.code(
      suffixes
        .map(suffix => `/absolute/path/to/${dependency.program}${suffix}`)
        .join("\n"),
      "text",
    );

    builder.append(
      "If `which` fails to return an executable path then you need to fix your `PATH` Environment Variable:",
    );

    builder.append(
      '\n<iframe width="560" height="315" src="https://www.youtube.com/embed/rJMFxIbDe-g" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>\n',
    );

    builder.append(
      `Once you successfully an executable path go to the ${MarkdownBuilder.createLink(
        "Configure",
        "#Configure",
      )} section.`,
    );
    builder.append(
      `Replace \`${fakePathForExecutable(
        dependency,
      )}\` with your specific executable path value.`,
    );
    return builder;
  }

  private appendUsageSection(builder: MarkdownBuilder): MarkdownBuilder {
    builder.header("Configure", 2);
    const beautifierName: string = this.beautifier.name;
    const dep = this.executable;
    const executableConfig = {
      [dep.name]: {
        path: fakePathForExecutable(dep),
      },
    };

    const beautifierOptions: any = {
      ...executableConfig,
    };

    builder.append(
      `A \`.unibeautifyrc.json\` file would look like the following:`,
    );
    builder.code(
      JSON.stringify(
        {
          LANGUAGE_NAME: {
            beautifiers: [beautifierName],
            [beautifierName]: beautifierOptions,
          },
        },
        null,
        2,
      ),
      "json",
    );
    builder.append(
      `**Note**: The \`LANGUAGE_NAME\` should be replaced with your desired supported language name, such as ${this.languages
        .slice(0, 3)
        .map(lang => `\`${lang.name}\``)
        .join(", ")}, etc.`,
    );
    builder.append(
      `See ${MarkdownBuilder.createLink(
        "Install",
        "#install",
      )} section below for how to determine absolute path to the exectuable.`,
    );
    return builder;
  }
  private get pkg(): object | undefined {
    return this.beautifier.package;
  }
  protected get customEditUrl() {
    return _.get(this.pkg, "homepage");
  }
}

function fakePathForExecutable(
  dependency: ExecutableDependencyDefinition,
): string {
  return `/absolute/path/to/${dependency.program}`;
}
