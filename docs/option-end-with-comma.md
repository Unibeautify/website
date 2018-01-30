---
id: option-end-with-comma
title: End With Comma
---
**Key**: `end_with_comma`

**Description**: If a terminating comma should be inserted into arrays, object literals, and destructured objects.

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### JavaScript
```JavaScript
var foo = {
    bar: "baz",
    qux: "quux",
};

var bar = {
    bar: "baz",
    qux: "quux"
};
```
## `true`
### JavaScript
```JavaScript
var foo = {
  bar: "baz",
  qux: "quux",
};

var bar = {
  bar: "baz",
  qux: "quux",
};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_comma": true
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
@@ -1,9 +1,9 @@
 var␣foo␣=␣{␊
-␣␣␣␣bar:␣"baz",␊
-␣␣␣␣qux:␣"quux",␊
+␣␣bar:␣"baz",␊
+␣␣qux:␣"quux",␊
 };␊
 ␊
 var␣bar␣=␣{␊
-␣␣␣␣bar:␣"baz",␊
\ No newline at end of file
-␣␣␣␣qux:␣"quux"␊
-};
+␣␣bar:␣"baz",␊
+␣␣qux:␣"quux",␊
+};␊

```
</details>
## `false`
### JavaScript
```JavaScript
var foo = {
  bar: "baz",
  qux: "quux"
};

var bar = {
  bar: "baz",
  qux: "quux"
};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_comma": false
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
@@ -1,9 +1,9 @@
 var␣foo␣=␣{␊
-␣␣␣␣bar:␣"baz",␊
-␣␣␣␣qux:␣"quux",␊
+␣␣bar:␣"baz",␊
+␣␣qux:␣"quux"␊
 };␊
 ␊
 var␣bar␣=␣{␊
-␣␣␣␣bar:␣"baz",␊
\ No newline at end of file
-␣␣␣␣qux:␣"quux"␊
-};
+␣␣bar:␣"baz",␊
+␣␣qux:␣"quux"␊
+};␊

```
</details>