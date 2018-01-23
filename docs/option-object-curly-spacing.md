---
id: option-object-curly-spacing
title: Object Curly Spacing
---
**Key**: `object_curly_spacing`

**Description**: Inserts a space before/after brackets for object literals, destructuring assignments, and import/export specifiers

**Type**: `boolean`

**Default**: `true`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };
```
## `true`
### JavaScript
```JavaScript
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };

```
## `false`
### JavaScript
```JavaScript
// simple object literals
var obj = {foo: "bar"};

// nested object literals
var obj = {foo: {zoo: "bar"}};

// destructuring assignment (EcmaScript 6)
var {x, y} = y;

// import/export declarations (EcmaScript 6)
import {foo} from "bar";
export {foo};

```