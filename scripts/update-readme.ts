import * as path from "path";
import * as fs from "fs";
import * as _ from "lodash";

import beautifiers from "./beautifiers";
import { Beautifier, DependencyType } from "../node_modules/unibeautify";

const readmePath = path.resolve(__dirname, "../README.md");

function main() {
  const newReadmeContents = replaceSupportTable(getReadmeContents());
  // console.log(newReadmeContents);
  setReadmeContents(newReadmeContents);
}

function getReadmeContents(): string {
  return fs.readFileSync(readmePath).toString();
}

function setReadmeContents(newContents: string): void {
  fs.writeFileSync(readmePath, newContents);
}

abstract class SectionReplacer {
  constructor(private section: string) {}

  private get pattern() {
    return new RegExp(`${this.start}(.+\n)+${this.end}`);
  }
  private get start(): string {
    return `<!--START:${this.section}-->\n`;
  }
  private get end(): string {
    return `<!--END:${this.section}-->\n`;
  }

  public replace(original: string): string {
    return original.replace(
      this.pattern,
      `${this.start}${this.contents}\n${this.end}`
    );
  }

  protected abstract get contents(): string;
}

class SupportTableReplacer extends SectionReplacer {
  constructor(private original: string) {
    super("SUPPORT-TABLE");
  }
  public generate(): string {
    return super.replace(this.original);
  }
  protected get contents(): string {
    return this.header;
  }
  private get header(): string {
    return `| # | Beautifier | Preinstalled | Documentation |\n| --- | --- | --- | --- |\n${this.rows.join(
      "\n"
    )}`;
  }
  private get rows(): string[] {
    return _.sortBy(beautifiers, "name").map((beautifier, index) => {
      const { name } = beautifier;
      const hasExecutable = this.beautifierHasExecutable(beautifier);
      return `| ${index + 1} | ${name} | ${
        hasExecutable ? ":warning:" : ":white_check_mark:"
      } | ${docUrl(name)} |`;
    });
  }

  private beautifierHasExecutable(beautifier: Beautifier): boolean {
    return (beautifier.dependencies || []).some(dep => {
      return dep.type === DependencyType.Executable;
    });
  }
}

function docUrl(beautifierName: string): string {
  return `https://unibeautify.com/docs/beautifier-${slugify(
    beautifierName
  )}.html`;
}

function slugify(beautifierName: string): string {
  return beautifierName
    .split(" ")
    .join("-")
    .toLocaleLowerCase();
}

function replaceSupportTable(original: string): string {
  return new SupportTableReplacer(original).generate();
}

main();
