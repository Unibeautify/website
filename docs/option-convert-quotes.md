---
id: option-convert-quotes
title: Convert Quotes
---
**Key**: `convert_quotes`

**Description**: Convert the quote characters delimiting strings from either double or single quotes to the other.

**Type**: `string`

**Default**: `"none"`

**Allowed values**: `"none"` or `"double"` or `"single"`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### JavaScript
```JavaScript
console.log('hello world');
console.log("hello world");
const hello = "hey";
console.log(`${hello} world`);
```
## `"none"`
### JavaScript
```JavaScript
console.log("hello world");
console.log("hello world");
const hello = "hey";
console.log(`${hello} world`);

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "convert_quotes": "none"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: none
===================================================================
--- none	Original
+++ none	Beautified
@@ -1,4 +1,4 @@
-console.log('hello␣world');␊
 console.log("hello␣world");␊
+console.log("hello␣world");␊
 const␣hello␣=␣"hey";␊
\ No newline at end of file
-console.log(`${hello}␣world`);
+console.log(`${hello}␣world`);␊

```
</details>
## `"double"`
### JavaScript
```JavaScript
console.log("hello world");
console.log("hello world");
const hello = "hey";
console.log(`${hello} world`);

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "convert_quotes": "double"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: double
===================================================================
--- double	Original
+++ double	Beautified
@@ -1,4 +1,4 @@
-console.log('hello␣world');␊
 console.log("hello␣world");␊
+console.log("hello␣world");␊
 const␣hello␣=␣"hey";␊
\ No newline at end of file
-console.log(`${hello}␣world`);
+console.log(`${hello}␣world`);␊

```
</details>
## `"single"`
### JavaScript
```JavaScript
console.log('hello world');
console.log('hello world');
const hello = 'hey';
console.log(`${hello} world`);

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "convert_quotes": "single"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: single
===================================================================
--- single	Original
+++ single	Beautified
@@ -1,4 +1,4 @@
 console.log('hello␣world');␊
-console.log("hello␣world");␊
-const␣hello␣=␣"hey";␊
-console.log(`${hello}␣world`);
\ No newline at end of file
+console.log('hello␣world');␊
+const␣hello␣=␣'hey';␊
+console.log(`${hello}␣world`);␊

```
</details>