---
id: option-newline-between-rules
title: Newline Between Rules
sidebar_label: ✅ Newline Between Rules
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `newline_between_rules`

**Description**: Add a newline between CSS rules

**Type**: `boolean`

**Default**: `true`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; | &#9989; |
| [CSV](/docs/language-csv.html) | &#10060; | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#9989; |
| [EJS](/docs/language-ejs.html) | &#10060; | &#9989; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; |
| [HTML+ERB](/docs/language-html-erb.html) | &#10060; | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; |
| [JSON](/docs/language-json.html) | &#10060; | &#9989; |
| [JSX](/docs/language-jsx.html) | &#10060; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#10060; | &#9989; |
| [Less](/docs/language-less.html) | &#10060; | &#9989; |
| [Riot](/docs/language-riot.html) | &#10060; | &#9989; |
| [SCSS](/docs/language-scss.html) | &#10060; | &#9989; |
| [SVG](/docs/language-svg.html) | &#10060; | &#9989; |
| [Sass](/docs/language-sass.html) | &#10060; | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#9989; |
| [Swig](/docs/language-swig.html) | &#10060; | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#9989; |
| [Twig](/docs/language-twig.html) | &#10060; | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#10060; | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#9989; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#9989; |
</details>
## Examples
### CSS
<details><summary><strong>🚧 Original Code</strong></summary>
```CSS
.class1 {
    color: blue;
    background-color: red;
}

.class2 {
    color: red;
    background-color: yellow;
}
.class3 {
    color: yellow;
    background-color: green;
}

.selector-1,
.selector-2 {
    color: green;
    background-color: blue;
}

```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```CSS
.class1 {
  color: blue;
  background-color: red;
}

.class2 {
  color: red;
  background-color: yellow;
}

.class3 {
  color: yellow;
  background-color: green;
}

.selector-1,
.selector-2 {
  color: green;
  background-color: blue;
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 2,
    "indent_char": " ",
    "newline_between_rules": true
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: true
===================================================================
--- true	Original
+++ true	Beautified
@@ -1,19 +1,20 @@
 .class1␣{␊
-␣␣␣␣color:␣blue;␊
-␣␣␣␣background-color:␣red;␊
+␣␣color:␣blue;␊
+␣␣background-color:␣red;␊
 }␊
 ␊
 .class2␣{␊
-␣␣␣␣color:␣red;␊
-␣␣␣␣background-color:␣yellow;␊
+␣␣color:␣red;␊
+␣␣background-color:␣yellow;␊
 }␊
+␊
 .class3␣{␊
-␣␣␣␣color:␣yellow;␊
-␣␣␣␣background-color:␣green;␊
+␣␣color:␣yellow;␊
+␣␣background-color:␣green;␊
 }␊
 ␊
 .selector-1,␊
 .selector-2␣{␊
-␣␣␣␣color:␣green;␊
-␣␣␣␣background-color:␣blue;␊
-}␊
+␣␣color:␣green;␊
+␣␣background-color:␣blue;␊
+}
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```CSS
.class1 {
  color: blue;
  background-color: red;
}
.class2 {
  color: red;
  background-color: yellow;
}
.class3 {
  color: yellow;
  background-color: green;
}
.selector-1,
.selector-2 {
  color: green;
  background-color: blue;
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 2,
    "indent_char": " ",
    "newline_between_rules": false
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: false
===================================================================
--- false	Original
+++ false	Beautified
@@ -1,19 +1,17 @@
 .class1␣{␊
-␣␣␣␣color:␣blue;␊
-␣␣␣␣background-color:␣red;␊
+␣␣color:␣blue;␊
+␣␣background-color:␣red;␊
 }␊
-␊
 .class2␣{␊
-␣␣␣␣color:␣red;␊
-␣␣␣␣background-color:␣yellow;␊
+␣␣color:␣red;␊
+␣␣background-color:␣yellow;␊
 }␊
 .class3␣{␊
-␣␣␣␣color:␣yellow;␊
-␣␣␣␣background-color:␣green;␊
+␣␣color:␣yellow;␊
+␣␣background-color:␣green;␊
 }␊
-␊
 .selector-1,␊
 .selector-2␣{␊
-␣␣␣␣color:␣green;␊
-␣␣␣␣background-color:␣blue;␊
-}␊
+␣␣color:␣green;␊
+␣␣background-color:␣blue;␊
+}
\ No newline at end of file

```
</details>
</details>