import Unibeautify, {
  Beautifier,
  Language,
  OptionsRegistry,
  BeautifierOptionName,
  ExecutableDependencyDefinition,
  DependencyType,
} from "unibeautify";
import { ensureFile, writeFile } from "fs-extra";
import * as path from "path";
import * as _ from "lodash";
const flattenArray = require("array-flatten");

import Doc from "./Doc";
import LanguageDoc from "./LanguageDoc";
import BeautifierDoc from "./BeautifierDoc";
import OptionsListDoc from "./OptionsListDoc";
import OptionsDoc from "./OptionsDoc";
import LanguagesListDoc from "./LanguagesListDoc";
import ExecutableDoc from "./ExecutableDoc";
import ContributingExamplesDoc from "./ContributingExamples";
import { slugify, optionKeyToTitle } from "./utils";
import beautifiers from "../beautifiers";

const docsPath = "docs";
Unibeautify.loadBeautifiers(beautifiers);
const optionRegistry: OptionsRegistry = _.pickBy(
  Unibeautify.loadedOptions,
  (option, optionName: BeautifierOptionName) => {
    return Unibeautify.getBeautifiersSupportingOption(optionName).length > 0;
  }
) as OptionsRegistry;
const supportedLanguages = Unibeautify.supportedLanguages;
const languageDocs = docsForLanguages(supportedLanguages);
const beautifierDocs = docsForBeautifiers(beautifiers);
const executableDocs = docsForExecutables(beautifiers);
const optionsDocs = docsForOptions();
const optionsListDoc = new OptionsListDoc(optionRegistry);
const languagesListDoc = new LanguagesListDoc(supportedLanguages);
const contributingExamplesDoc = new ContributingExamplesDoc(supportedLanguages);

main();

async function main() {
  return await Promise.all([
    writeDocs(languageDocs),
    writeDocs(beautifierDocs),
    writeDocs(executableDocs),
    writeDocs(optionsDocs),
    writeDoc(optionsListDoc),
    writeDoc(languagesListDoc),
    writeDoc(contributingExamplesDoc),
    updateSidebars({
      languages: languageDocs,
      beautifiers: beautifierDocs,
      executables: executableDocs,
    }),
  ]).catch(error => {
    console.error(error);
    process.exit(1);
  });
}

function docsForLanguages(languages: Language[]): LanguageDoc[] {
  return languages.map(
    language =>
      new LanguageDoc(language, Unibeautify.getBeautifiersForLanguage(language))
  );
}
function docsForBeautifiers(beautifiers: Beautifier[]): BeautifierDoc[] {
  return beautifiers.map(
    beautifier =>
      new BeautifierDoc(beautifier, languagesForBeautifier(beautifier))
  );
}
function docsForExecutables(beautifiers: Beautifier[]): ExecutableDoc[] {
  return flattenArray(
    beautifiers.map(beautifier =>
      executablesForBeautifier(beautifier).map(
        executable =>
          new ExecutableDoc(
            executable,
            beautifier,
            languagesForBeautifier(beautifier)
          )
      )
    )
  );
}
function executablesForBeautifier(
  beautifier: Beautifier
): ExecutableDependencyDefinition[] {
  return (beautifier.dependencies || []).filter(
    dep => dep.type === DependencyType.Executable
  ) as ExecutableDependencyDefinition[];
}

function docsForOptions(): OptionsDoc[] {
  return Object.keys(optionRegistry)
    .map(key => ({ option: optionRegistry[key], key }))
    .map(
      ({ option, key }) =>
        new OptionsDoc(option, key as BeautifierOptionName, beautifiers)
    );
}
function languagesForBeautifier(beautifier: Beautifier): Language[] {
  const languages = Unibeautify.getLoadedLanguages();
  return languages.filter(
    lang => Object.keys(beautifier.options).indexOf(lang.name) !== -1
  );
}
async function writeDocs(docs: Doc[]): Promise<any> {
  return await Promise.all(docs.map(writeDoc));
}
async function writeDoc(doc: Doc): Promise<void> {
  const filePath: string = path.resolve(
    __dirname,
    "../../",
    docsPath,
    doc.fileName
  );
  await ensureFile(filePath);
  const contents = await doc.contents;
  return await writeFile(filePath, contents);
}
async function updateSidebars({
  languages,
  beautifiers,
  executables,
}: {
  languages: LanguageDoc[];
  beautifiers: BeautifierDoc[];
  executables: ExecutableDoc[];
}) {
  if (!(Array.isArray(languages) && Array.isArray(beautifiers))) {
    return Promise.reject(new Error("Languages or beautifiers missing."));
  }
  const sidebarsPath = path.resolve(__dirname, "../../website/sidebars.json");
  const sidebars = require(sidebarsPath);
  const newSidebars = {
    ...sidebars,
    docs: {
      ...sidebars.docs,
      Beautifiers: beautifiers.map(beautifier => beautifier.id).sort(),
    },
    options: optionsSidebar(),
    languages: languagesSidebar(languages),
    executables: executablesSidebar(executables),
  };
  return await writeFile(sidebarsPath, JSON.stringify(newSidebars, null, 2));
}
function languagesSidebar(
  languages: LanguageDoc[]
): {
  [sectionKey: string]: string[];
} {
  const prefix = "language-";
  const languageIds = languages.map(language => language.id).sort();
  const firstLetterIndex = prefix.length;
  return _.groupBy(languageIds, (languageId: string) =>
    languageId[firstLetterIndex].toUpperCase()
  );
}
function optionsSidebar(): {
  [sectionKey: string]: string[];
} {
  const optionKeys = Object.keys(optionRegistry);
  const prefix = "option-";
  const optionIds = optionKeys.map(key => {
    const title: string = optionRegistry[key].title || optionKeyToTitle(key);
    const slug: string = slugify(title);
    return `${prefix}${slug}`;
  });
  const firstLetterIndex = prefix.length;
  return _.groupBy(optionIds, (optionId: string) =>
    optionId[firstLetterIndex].toUpperCase()
  );
}
function executablesSidebar(
  executables: ExecutableDoc[]
): {
  [sectionKey: string]: string[];
} {
  return _.chain(executables)
    .groupBy(
      (executable: ExecutableDoc) => `${executable.beautifierName} Beautifier`
    )
    .mapValues((group: ExecutableDoc[]) => _.map(group, exec => exec.id))
    .value();
}
