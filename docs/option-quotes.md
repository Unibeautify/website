---
id: option-quotes
title: Quotes
sidebar_label: ✅ Quotes
---
**Key**: `quotes`

**Description**: Convert the quote characters delimiting strings from either double or single quotes to the other.

**Type**: `string`

**Default**: `"none"`

**Allowed values**: `"none"` or `"double"` or `"single"`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [Vue](/docs/language-vue.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

| Language | [Prettier](/docs/beautifier-prettier.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; | &#9989; |
| [CSV](/docs/language-csv.html) | &#10060; | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#9989; |
| [EJS](/docs/language-ejs.html) | &#10060; | &#9989; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; |
| [HTML+ERB](/docs/language-html%2Berb.html) | &#10060; | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#9989; |
| [Riot](/docs/language-riot.html) | &#10060; | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#9989; |
| [SVG](/docs/language-svg.html) | &#10060; | &#9989; |
| [Sass](/docs/language-sass.html) | &#10060; | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#9989; |
| [Swig](/docs/language-swig.html) | &#10060; | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#9989; |
| [Twig](/docs/language-twig.html) | &#10060; | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#9989; |
| [Vue](/docs/language-vue.html) | &#9989; | &#10060; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#9989; |
## Examples
### JavaScript
#### 🚧 Original Code
```JavaScript
console.log('hello world');
console.log("hello world");
const hello = "hey";
console.log(`${hello} world`);
```
#### 🔧 `"none"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
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
    "quotes": "none"
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
#### 🔧 `"double"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
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
    "quotes": "double"
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
#### 🔧 `"single"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
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
    "quotes": "single"
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