---
id: option-space-after-anon-function
title: Space After Anon Function
---
**Key**: `space_after_anon_function`

**Description**: Add a space before an anonymous function's parens, ie. function ()

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### JavaScript
```JavaScript
const fun1 = function (arg1) {
}
const fun2 = function(arg1) {
}

```
## `true`
### JavaScript
```JavaScript
const fun1 = function(arg1) {};
const fun2 = function(arg1) {};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "space_after_anon_function": true
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
@@ -1,4 +1,2 @@
-const␣fun1␣=␣function␣(arg1)␣{␊
-}␊
-const␣fun2␣=␣function(arg1)␣{␊
-}␊
+const␣fun1␣=␣function(arg1)␣{};␊
+const␣fun2␣=␣function(arg1)␣{};␊

```
</details>
## `false`
### JavaScript
```JavaScript
const fun1 = function(arg1) {};
const fun2 = function(arg1) {};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "space_after_anon_function": false
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
@@ -1,4 +1,2 @@
-const␣fun1␣=␣function␣(arg1)␣{␊
-}␊
-const␣fun2␣=␣function(arg1)␣{␊
-}␊
+const␣fun1␣=␣function(arg1)␣{};␊
+const␣fun2␣=␣function(arg1)␣{};␊

```
</details>