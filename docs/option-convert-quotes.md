---
id: option-convert-quotes
title: Convert Quotes
---
**Key**: `convert_quotes`

**Description**: Convert the quote characters delimiting strings from either double or single quotes to the other.

**Type**: `string`

**Default**: `"none"`

**Allowed values**: `"none"` or `"double"` or `"single"`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### JavaScript
```JavaScript
console.log('hello world');
console.log("hello world");
```
## `"none"`
### JavaScript
```JavaScript
console.log("hello world");
console.log("hello world");

```
## `"double"`
### JavaScript
```JavaScript
console.log("hello world");
console.log("hello world");

```
## `"single"`
### JavaScript
```JavaScript
console.log('hello world');
console.log('hello world');

```