---
id: about
title: What is Unibeautify
---

**Unibeautify is a universal code beautifier.**

The one beautifier to rule them all!

Unibeautify joins multiple beautifiers into one unified experience.

![diagram](https://docs.google.com/drawings/d/1elu3OU4o37_lDiDNgovolXdY7D1VQ-_9nsDs5y1HlQY/pub?w=1314&h=732)

> "Beautifier" will refer to either a code formatter (e.g. [Prettier](https://prettier.io/)) or linter with fix mode enabled (e.g. `eslint --fix`).

Let's say you want to use multiple beautifiers to format the code in your project, which use multiple languages.
For example, for your [JavaScript](language-javascript.md) you may format using [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/).
You may also have [Python](language-python.md) code you format with [autopep8](https://github.com/hhatto/autopep8) or C++ code you format with [ClangFormat](https://clang.llvm.org/docs/ClangFormat.html).

Each of these beautifiers support different options, languages, and editor integrations.
With Unibeautify, this experience is made consistent.

Let's consider [Atom](https://atom.io/) editor integration.

| Atom Package | Prettier | ESLint | Autopep8 | ClangFormat |
| --- | --- | --- | --- | --- |
| [`atom-beautify`](https://atom.io/packages/atom-beautify) <small>(Unibeautify for Atom)</small> | &#9989; | &#9989; | &#9989; | &#9989; |
| [`prettier-atom`](https://atom.io/packages/prettier-atom) | &#9989; | &#9989; | &#10060; | &#10060; |
| [`linter-eslint`](https://atom.io/packages/linter-eslint) | &#10060; | &#9989; | &#10060; | &#10060; |
| [`python-autopep8`](https://atom.io/packages/python-autopep8) | &#10060; | &#10060; | &#9989; | &#10060; |
| [`clang-format`](https://atom.io/packages/clang-format) | &#10060; | &#10060; | &#10060; | &#9989; |

**Unibeautify does not handle any of the code formatting itself.** Instead Unibeautify focuses on managing the underlying beautifiers and providing an exceptional user experience regardless of languages or beautifiers involved.
