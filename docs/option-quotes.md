---
id: option-quotes
title: Quotes
sidebar_label: ✅ Quotes
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `quotes`

**Description**: Convert the quote characters delimiting strings from either double or single quotes to the other.

**Type**: `string`

**Default**: `"none"`

**Allowed values**: `"none"` or `"double"` or `"single"`

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
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/quotes.txt" target="_blank">Edit JavaScript Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
console.log('hello world');
console.log("hello world");
const hello = "hey";
console.log(`${hello} world`);
```
</details>
<details><summary><strong>🔧 `"none"`</strong></summary>
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
</details>
<details><summary><strong>🔧 `"double"`</strong></summary>
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
</details>
<details><summary><strong>🔧 `"single"`</strong></summary>
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
</details>