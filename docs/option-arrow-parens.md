---
id: option-arrow-parens
title: Arrow Parens
---
**Key**: `arrow_parens`

**Description**: Require parenthesis in arrow function arguments

**Type**: `string`

**Default**: `"always"`

**Allowed values**: `"always"` or `"as-needed"`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
a => {};
(a) => {};
(a,b) => {};
```
## `"always"`
### JavaScript
```JavaScript
(a) => {};
(a) => {};
(a, b) => {};

```
## `"as-needed"`
### JavaScript
```JavaScript
a => {};
a => {};
(a, b) => {};

```