import { Beautifier } from "unibeautify";
import prettyDiff from "@unibeautify/beautifier-prettydiff";
import prettier from "@unibeautify/beautifier-prettier";
import jsBeautify from "@unibeautify/beautifier-js-beautify";
import eslint from "@unibeautify/beautifier-eslint";
import phpCsFixer from "@unibeautify/beautifier-php-cs-fixer";
import clangFormat from "@unibeautify/beautifier-clang-format";
import phpCodesniffer from "@unibeautify/beautifier-php-codesniffer";
import black from "@unibeautify/beautifier-black";
import gofmt from "@unibeautify/beautifier-gofmt";
import sqlformat from "@unibeautify/beautifier-sqlformat";
import yapf from "@unibeautify/beautifier-yapf";
import tslint from "@unibeautify/beautifier-tslint";
import csscomb from "@unibeautify/beautifier-csscomb";
import stylelint from "@unibeautify/beautifier-stylelint";

const beautifiers: Beautifier[] = <any[]>[
  prettier,
  jsBeautify,
  prettyDiff,
  eslint,
  phpCsFixer,
  clangFormat,
  phpCodesniffer,
  black,
  gofmt,
  sqlformat,
  yapf,
  tslint,
  csscomb,
  stylelint,
];

export default beautifiers;
