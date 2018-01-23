---
id: option-end-with-comma
title: End With Comma
---
**Key**: `end_with_comma`

**Description**: If a terminating comma should be inserted into arrays, object literals, and destructured objects.

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

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