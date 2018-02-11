---
id: beautifier-eslint
title: ESLint
sidebar_label: ESLint
custom_edit_url: https://github.com/Unibeautify/beautifier-eslint#readme
---
## About
ESLint beautifier for Unibeautify
| Package | Docs | Latest |
| --- | --- | --- |
| **[@unibeautify/beautifier-eslint](https://www.npmjs.com/package/@unibeautify/beautifier-eslint)** | v0.2.0 | [![npm](https://img.shields.io/npm/v/@unibeautify/beautifier-eslint.svg)](https://www.npmjs.com/package/@unibeautify/beautifier-eslint) |
| **[unibeautify](https://www.npmjs.com/package/unibeautify)** | v0.7.0 | [![npm](https://img.shields.io/npm/v/unibeautify.svg)](https://www.npmjs.com/package/unibeautify) |
| **[eslint](https://www.npmjs.com/package/eslint)** | v4.17.0 | [![npm](https://img.shields.io/npm/v/eslint.svg)](https://www.npmjs.com/package/eslint) |
## Install
Install with [`npm`](https://www.npmjs.com/):
```bash
npm install --save-dev unibeautify eslint @unibeautify/beautifier-eslint
```
Or with [`yarn`](https://yarnpkg.com/):
```bash
yarn add --dev unibeautify eslint @unibeautify/beautifier-eslint
```
## Usage
Below are example configuration files for each of the supported languages.
<details><summary>JSX</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "JSX": {
    "beautifiers": [
      "ESLint"
    ]
  }
}
```
</details>
<details><summary>JavaScript</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "JavaScript": {
    "beautifiers": [
      "ESLint"
    ]
  }
}
```
</details>
## Options
| Option | [JSX](/docs/language-jsx.html) | [JavaScript](/docs/language-javascript.html) |
| --- | --- | --- |
| [Arrow Parens](/docs/option-arrow-parens.html) | &#9989; | &#9989; |
| [Break Chained Methods](/docs/option-break-chained-methods.html) | &#9989; | &#9989; |
| [End With Comma](/docs/option-end-with-comma.html) | &#9989; | &#9989; |
| [End With Semicolon](/docs/option-end-with-semicolon.html) | &#9989; | &#9989; |
| [Object Curly Spacing](/docs/option-object-curly-spacing.html) | &#9989; | &#9989; |
| [Quotes](/docs/option-quotes.html) | &#9989; | &#9989; |
| [Remove Trailing Whitespace](/docs/option-remove-trailing-whitespace.html) | &#9989; | &#9989; |