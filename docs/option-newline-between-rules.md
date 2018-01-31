---
id: option-newline-between-rules
title: Newline Between Rules
---
**Key**: `newline_between_rules`

**Description**: Add a newline between CSS rules

**Type**: `boolean`

**Default**: `true`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## CSS
### Original Code
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
### `true`
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
### `false`
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