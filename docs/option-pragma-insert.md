---
id: option-pragma-insert
title: Pragma Insert
---
**Key**: `pragma_insert`

**Description**: Insert a marker at the top of a file specifying the file has been beautified

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
function sayHello() {
console.log("Hello world");
}
```
## `true`
### JavaScript
```JavaScript
/** @format */

function sayHello() {
  console.log("Hello world");
}

```
## `false`
### JavaScript
```JavaScript
function sayHello() {
  console.log("Hello world");
}

```