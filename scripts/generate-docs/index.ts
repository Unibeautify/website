import Unibeautify, { Beautifier, Language } from "unibeautify";
import * as prettyDiff from "beautifier-prettydiff";
import prettier from "@unibeautify/beautifier-prettier";
import { ensureFile, writeFile } from "fs-extra";
import * as path from "path";
import * as _ from "lodash";

import Doc from "./Doc";
import LanguageDoc from "./LanguageDoc";
import BeautifierDoc from "./BeautifierDoc";
import OptionsListDoc from "./OptionsListDoc";
import OptionsDoc from "./OptionsDoc";
import { slugify, optionKeyToTitle } from "./utils";

const docsPath = "docs";

const beautifiers: Beautifier[] = [<any>prettyDiff, <Beautifier>prettier];

Unibeautify.loadBeautifiers(beautifiers);
const supportedLanguages = Unibeautify.supportedLanguages;
const languageDocs = docsForLanguages(supportedLanguages);
const beautifierDocs = docsForBeautifiers(beautifiers);
const optionsDocs = docsForOptions();
const optionsListDoc = new OptionsListDoc();

languageDocs.map(writeDoc);
beautifierDocs.map(writeDoc);
optionsDocs.map(writeDoc);
writeDoc(optionsListDoc);
updateSidebars(languageDocs, beautifierDocs);

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

function docsForOptions(): OptionsDoc[] {
  const optionRegistry = (Unibeautify as any).options;
  return Object.keys(optionRegistry)
    .map(key => ({ option: optionRegistry[key], key: key }))
    .map(({ option, key }) => new OptionsDoc(option, key));
}

function languagesForBeautifier(beautifier: Beautifier): Language[] {
  const languages = Unibeautify.getLoadedLanguages();
  return languages.filter(
    lang => Object.keys(beautifier.options).indexOf(lang.name) !== -1
  );
}

async function writeDoc(doc: Doc) {
  const filePath: string = path.resolve(
    __dirname,
    "../../",
    docsPath,
    doc.fileName
  );
  await ensureFile(filePath);
  return await writeFile(filePath, doc.contents);
}

async function updateSidebars(
  languages: LanguageDoc[],
  beautifiers: BeautifierDoc[]
) {
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
      Languages: languages.map(lang => lang.id).sort(),
    },
    options: optionsSidebar(),
  };
  return await writeFile(sidebarsPath, JSON.stringify(newSidebars, null, 2));
}

function optionsSidebar(): { [sectionKey: string]: string[] } {
  const optionRegistry = (Unibeautify as any).options;
  const optionKeys = Object.keys(optionRegistry);
  const optionIds = optionKeys.map(key => {
    const title: string = optionRegistry[key].title || optionKeyToTitle(key);
    const slug: string = slugify(title);
    return `option-${slug}`;
  });
  const firstLetterIndex = 7;
  return _.groupBy(optionIds, (optionId, index) =>
    optionId[firstLetterIndex].toUpperCase()
  );
}
