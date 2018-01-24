---
id: option-jsx-brackets
title: Jsx Brackets
---
**Key**: `jsx_brackets`

**Description**: Put the > of a multi-line JSX element at the end of the last line

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
<div
className="HelloWorld"
title={`You are visitor number ${num}`}
onMouseOver={onMouseOver}
>
    hello world
</div>
```
## `true`
### JavaScript
```JavaScript
<div
  className="HelloWorld"
  title={`You are visitor number ${num}`}
  onMouseOver={onMouseOver}>
  hello world
</div>;

```
## `false`
### JavaScript
```JavaScript
<div
  className="HelloWorld"
  title={`You are visitor number ${num}`}
  onMouseOver={onMouseOver}
>
  hello world
</div>;

```