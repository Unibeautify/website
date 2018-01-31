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
## JavaScript
### Original Code
```JavaScript
a => {};
(a) => {};
(a, b) => {};
```
### `"always"`
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
### `"as-needed"`
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