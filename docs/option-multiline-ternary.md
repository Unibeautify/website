---
id: option-multiline-ternary
title: Multiline Ternary
sidebar_label: ✅ Multiline Ternary
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `multiline_ternary`

**Description**: Enforces new lines between the operands of a ternary expression

**Type**: `string`

**Default**: `"always"`

**Allowed values**: `"always"` or `"always-multiline"` or `"never"`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Pretty Diff](/docs/beautifier-pretty-diff.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- |
| [C#](/docs/language-csharp.html) | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; |
| [CSV](/docs/language-csv.html) | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#9989; |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [HTML](/docs/language-html.html) | &#9989; |
| [HTML+ERB](/docs/language-html-erb.html) | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [Java](/docs/language-java.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
| [Less](/docs/language-less.html) | &#9989; |
| [Riot](/docs/language-riot.html) | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; |
| [SVG](/docs/language-svg.html) | &#9989; |
| [Sass](/docs/language-sass.html) | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#9989; |
| [Swig](/docs/language-swig.html) | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#9989; |
| [Twig](/docs/language-twig.html) | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#9989; |
| [XML](/docs/language-xml.html) | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#9989; |
</details>
## Examples
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
const val1 = a ? "yes" : "no";
const val2 = a ? ( b ? "yes" : "no") : "maybe";

```
</details>
<details><summary><strong>🔧 `"always"`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```JavaScript
const val1 = a
  ? "yes"
  : "no";
const val2 = a
  ? (
    b
    ? "yes"
    : "no")
  : "maybe";
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "multiline_ternary": "always"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: always
===================================================================
--- always	Original
+++ always	Beautified
@@ -1,2 +1,9 @@
-const␣val1␣=␣a␣?␣"yes"␣:␣"no";␊
-const␣val2␣=␣a␣?␣(␣b␣?␣"yes"␣:␣"no")␣:␣"maybe";␊
+const␣val1␣=␣a␊
+␣␣?␣"yes"␊
+␣␣:␣"no";␊
+const␣val2␣=␣a␊
+␣␣?␣(␊
+␣␣␣␣b␊
+␣␣␣␣?␣"yes"␊
+␣␣␣␣:␣"no")␊
+␣␣:␣"maybe";
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `"always-multiline"`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```JavaScript
const val1 = a
  ? "yes"
  : "no";
const val2 = a
  ? (
    b
    ? "yes"
    : "no")
  : "maybe";
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "multiline_ternary": "always-multiline"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: always-multiline
===================================================================
--- always-multiline	Original
+++ always-multiline	Beautified
@@ -1,2 +1,9 @@
-const␣val1␣=␣a␣?␣"yes"␣:␣"no";␊
-const␣val2␣=␣a␣?␣(␣b␣?␣"yes"␣:␣"no")␣:␣"maybe";␊
+const␣val1␣=␣a␊
+␣␣?␣"yes"␊
+␣␣:␣"no";␊
+const␣val2␣=␣a␊
+␣␣?␣(␊
+␣␣␣␣b␊
+␣␣␣␣?␣"yes"␊
+␣␣␣␣:␣"no")␊
+␣␣:␣"maybe";
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `"never"`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```JavaScript
const val1 = a ? "yes" : "no";
const val2 = a ? (b ? "yes" : "no") : "maybe";
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "multiline_ternary": "never"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: never
===================================================================
--- never	Original
+++ never	Beautified
@@ -1,2 +1,2 @@
 const␣val1␣=␣a␣?␣"yes"␣:␣"no";␊
-const␣val2␣=␣a␣?␣(␣b␣?␣"yes"␣:␣"no")␣:␣"maybe";␊
+const␣val2␣=␣a␣?␣(b␣?␣"yes"␣:␣"no")␣:␣"maybe";
\ No newline at end of file

```
</details>
</details>