---
id: option-arrow-parens
title: Arrow Parens
sidebar_label: Arrow Parens (✅)
---
**Key**: `arrow_parens`

**Description**: Require parenthesis in arrow function arguments

**Type**: `string`

**Default**: `"always"`

**Allowed values**: `"always"` or `"as-needed"`

## Support
**Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

| Language | [Prettier](/docs/beautifier-prettier.html) |
| --- | --- |
| [CSS](/docs/language-css.html) | &#9989; |
| [GraphQL](/docs/language-graphql.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
| [Less](/docs/language-less.html) | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; |
## Examples
### JavaScript
#### Original Code
```JavaScript
a => {};
(a) => {};
(a, b) => {};
```
#### `"always"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
(a) => {};
(a) => {};
(a, b) => {};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "arrow_parens": "always"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: always
===================================================================
--- always	Original
+++ always	Beautified
@@ -1,3 +1,3 @@
-a␣=>␣{};␊
 (a)␣=>␣{};␊
-(a,␣b)␣=>␣{};
\ No newline at end of file
+(a)␣=>␣{};␊
+(a,␣b)␣=>␣{};␊

```
</details>
#### `"as-needed"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
a => {};
a => {};
(a, b) => {};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "arrow_parens": "as-needed"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: as-needed
===================================================================
--- as-needed	Original
+++ as-needed	Beautified
@@ -1,3 +1,3 @@
 a␣=>␣{};␊
-(a)␣=>␣{};␊
-(a,␣b)␣=>␣{};
\ No newline at end of file
+a␣=>␣{};␊
+(a,␣b)␣=>␣{};␊

```
</details>