---
id: beautifier-js-beautify
title: JS-Beautify
sidebar_label: JS-Beautify
custom_edit_url: https://github.com/Unibeautify/beautifier-js-beautify#readme
---
## About
JS-Beautify beautifier for Unibeautify
| Package | Docs | Latest |
| --- | --- | --- |
| **[@unibeautify/beautifier-js-beautify](https://www.npmjs.com/package/@unibeautify/beautifier-js-beautify)** | v0.3.0 | [![npm](https://img.shields.io/npm/v/@unibeautify/beautifier-js-beautify.svg)](https://www.npmjs.com/package/@unibeautify/beautifier-js-beautify) |
| **[js-beautify](https://www.npmjs.com/package/js-beautify)** | v1.7.5 | [![npm](https://img.shields.io/npm/v/js-beautify.svg)](https://www.npmjs.com/package/js-beautify) |
| **[unibeautify](https://www.npmjs.com/package/unibeautify)** | v0.7.0 | [![npm](https://img.shields.io/npm/v/unibeautify.svg)](https://www.npmjs.com/package/unibeautify) |
## Install
Install with [`npm`](https://www.npmjs.com/):
```bash
npm install --save-dev js-beautify unibeautify @unibeautify/beautifier-js-beautify
```
Or with [`yarn`](https://yarnpkg.com/):
```bash
yarn add --dev js-beautify unibeautify @unibeautify/beautifier-js-beautify
```
## Usage
Below are example configuration files for each of the supported languages.
<details><summary>CSS</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "CSS": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>EJS</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "EJS": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>HTML</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "HTML": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>Handlebars</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Handlebars": {
    "beautifiers": [
      "JS-Beautify"
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
      "JS-Beautify"
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
      "JS-Beautify"
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
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>Liquid</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Liquid": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>Mustache</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "Mustache": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
<details><summary>XML</summary>
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "XML": {
    "beautifiers": [
      "JS-Beautify"
    ]
  }
}
```
</details>
## Options
| Option | [CSS](/docs/language-css.html) | [EJS](/docs/language-ejs.html) | [HTML](/docs/language-html.html) | [Handlebars](/docs/language-handlebars.html) | [JSON](/docs/language-json.html) | [JSX](/docs/language-jsx.html) | [JavaScript](/docs/language-javascript.html) | [Liquid](/docs/language-liquid.html) | [Mustache](/docs/language-mustache.html) | [XML](/docs/language-xml.html) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| [Brace Style](/docs/option-brace-style.html) | &#10060; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Break Chained Methods](/docs/option-break-chained-methods.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Comma First](/docs/option-comma-first.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [End With Newline](/docs/option-end-with-newline.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Indent Char](/docs/option-indent-char.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Indent Inner Html](/docs/option-indent-inner-html.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Indent Scripts](/docs/option-indent-scripts.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Indent Size](/docs/option-indent-size.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Jslint happy](/docs/option-jslint-happy.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Keep Array Indentation](/docs/option-keep-array-indentation.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Max Preserve Newlines](/docs/option-max-preserve-newlines.html) | &#10060; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Newline Before Tags](/docs/option-newline-before-tags.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Newline Between Rules](/docs/option-newline-between-rules.html) | &#9989; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; |
| [Preserve Newlines](/docs/option-preserve-newlines.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |
| [Selector Separator Newline](/docs/option-selector-separator-newline.html) | &#9989; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; | &#10060; |
| [Space After Anon Function](/docs/option-space-after-anon-function.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Space Before Conditional](/docs/option-space-before-conditional.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Space In Empty Paren](/docs/option-space-in-empty-paren.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Space In Paren](/docs/option-space-in-paren.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Unescape Strings](/docs/option-unescape-strings.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Unformatted](/docs/option-unformatted.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Unindent Chained Methods](/docs/option-unindent-chained-methods.html) | &#10060; | &#9989; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; |
| [Wrap Attributes](/docs/option-wrap-attributes.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Wrap Attributes Indent Size](/docs/option-wrap-attributes-indent-size.html) | &#10060; | &#10060; | &#9989; | &#9989; | &#10060; | &#10060; | &#10060; | &#9989; | &#9989; | &#9989; |
| [Wrap Line Length](/docs/option-wrap-line-length.html) | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; | &#9989; |