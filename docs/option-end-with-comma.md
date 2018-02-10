---
id: option-end-with-comma
title: End With Comma
sidebar_label: ✅ End With Comma
---
**Key**: `end_with_comma`

**Description**: If a terminating comma should be inserted into arrays, object literals, and destructured objects.

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [Vue](/docs/language-vue.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html), [ESLint](/docs/beautifier-eslint.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [Prettier](/docs/beautifier-prettier.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) | [ESLint](/docs/beautifier-eslint.html) |
| --- | --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#9989; | &#10060; |
| [CSS](/docs/language-css.html) | &#9989; | &#9989; | &#10060; |
| [CSV](/docs/language-csv.html) | &#10060; | &#9989; | &#10060; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#9989; | &#10060; |
| [EJS](/docs/language-ejs.html) | &#10060; | &#9989; | &#10060; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; | &#10060; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; | &#10060; |
| [HTML+ERB](/docs/language-html-erb.html) | &#10060; | &#9989; | &#10060; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; | &#10060; |
| [JSON](/docs/language-json.html) | &#9989; | &#9989; | &#10060; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#9989; | &#10060; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#9989; | &#10060; |
| [Riot](/docs/language-riot.html) | &#10060; | &#9989; | &#10060; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#9989; | &#10060; |
| [SVG](/docs/language-svg.html) | &#10060; | &#9989; | &#10060; |
| [Sass](/docs/language-sass.html) | &#10060; | &#9989; | &#10060; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#9989; | &#10060; |
| [Swig](/docs/language-swig.html) | &#10060; | &#9989; | &#10060; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#9989; | &#10060; |
| [Twig](/docs/language-twig.html) | &#10060; | &#9989; | &#10060; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#9989; | &#10060; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#9989; | &#10060; |
| [Vue](/docs/language-vue.html) | &#9989; | &#10060; | &#10060; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; | &#10060; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#9989; | &#10060; |
</details>
## Examples
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
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
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
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
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
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
</details>