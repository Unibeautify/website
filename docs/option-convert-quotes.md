---
id: option-convert-quotes
title: Convert Quotes
---
**Key**: `convert_quotes`

**Description**: Convert the quote characters delimiting strings from either double or single quotes to the other.

**Type**: `string`

**Default**: `"none"`

**Allowed values**: `"none"` or `"double"` or `"single"`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
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