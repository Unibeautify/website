---
id: option-end-with-comma
title: End With Comma
---
**Key**: `end_with_comma`

**Description**: If a terminating comma should be inserted into arrays, object literals, and destructured objects.

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
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