---
id: beautifier-prettier
title: Prettier
sidebar_label: Prettier
custom_edit_url: https://github.com/Unibeautify/beautifier-prettier#readme
---
## About
Prettier beautifier for Unibeautify
| Package | Docs | Latest |
| --- | --- | --- |
| **[@unibeautify/beautifier-prettier](https://www.npmjs.com/package/@unibeautify/beautifier-prettier)** | v0.6.0 | [![npm](https://img.shields.io/npm/v/@unibeautify/beautifier-prettier.svg)](https://www.npmjs.com/package/@unibeautify/beautifier-prettier) |
| **[unibeautify](https://www.npmjs.com/package/unibeautify)** | v0.7.0 | [![npm](https://img.shields.io/npm/v/unibeautify.svg)](https://www.npmjs.com/package/unibeautify) |
| **[prettier](https://www.npmjs.com/package/prettier)** | v1.10.2 | [![npm](https://img.shields.io/npm/v/prettier.svg)](https://www.npmjs.com/package/prettier) |
## Install
Install with [`npm`](https://www.npmjs.com/):
```bash
npm install --save-dev unibeautify prettier @unibeautify/beautifier-prettier
```
Or with [`yarn`](https://yarnpkg.com/):
```bash
yarn add --dev unibeautify prettier @unibeautify/beautifier-prettier
```
## Usage
Below are example configuration files for each of the supported languages.
<details><summary>CSS</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "CSS": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>GraphQL</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "GraphQL": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>JSON</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "JSON": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>JSX</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "JSX": {
    "beautifiers": [
      "Prettier"
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
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>Less</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Less": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>Markdown</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Markdown": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>SCSS</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "SCSS": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>TypeScript</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "TypeScript": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
<details><summary>Vue</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Vue": {
    "beautifiers": [
      "Prettier"
    ]
  }
}
```
</details>
## Options
| Option | [CSS](/docs/language-css.html) | [GraphQL](/docs/language-graphql.html) | [JSON](/docs/language-json.html) | [JSX](/docs/language-jsx.html) | [JavaScript](/docs/language-javascript.html) | [Less](/docs/language-less.html) | [Markdown](/docs/language-markdown.html) | [SCSS](/docs/language-scss.html) | [TypeScript](/docs/language-typescript.html) | [Vue](/docs/language-vue.html) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Arrow Parens](/docs/option-arrow-parens.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [End With Comma](/docs/option-end-with-comma.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [End With Semicolon](/docs/option-end-with-semicolon.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Indent Char](/docs/option-indent-char.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Indent Size](/docs/option-indent-size.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Indent With Tabs](/docs/option-indent-with-tabs.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Jsx brackets](/docs/option-jsx-brackets.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Object Curly Spacing](/docs/option-object-curly-spacing.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Pragma Insert](/docs/option-pragma-insert.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Pragma Require](/docs/option-pragma-require.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Quotes](/docs/option-quotes.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Wrap Line Length](/docs/option-wrap-line-length.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Wrap Prose](/docs/option-wrap-prose.html) | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#9989; | &#10060; | &#10060; | &#10060; |