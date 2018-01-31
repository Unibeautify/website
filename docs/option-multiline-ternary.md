---
id: option-multiline-ternary
title: Multiline Ternary
---
**Key**: `multiline_ternary`

**Description**: Enforces new lines between the operands of a ternary expression

**Type**: `string`

**Default**: `"always"`

**Allowed values**: `"always"` or `"always-multiline"` or `"never"`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## JavaScript
### Original Code
```JavaScript
const val1 = a ? "yes" : "no";
const val2 = a ? ( b ? "yes" : "no") : "maybe";

```
### `"always"`
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
### `"always-multiline"`
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
### `"never"`
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