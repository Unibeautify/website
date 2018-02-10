---
id: option-arrow-parens
title: Arrow Parens
sidebar_label: ✅ Arrow Parens
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `arrow_parens`

**Description**: Require parenthesis in arrow function arguments

**Type**: `string`

**Default**: `"always"`

**Allowed values**: `"always"` or `"as-needed"`

## Support
**Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html), [Vue](/docs/language-vue.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [ESLint](/docs/beautifier-eslint.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [Prettier](/docs/beautifier-prettier.html) | [ESLint](/docs/beautifier-eslint.html) |
| --- | --- | --- |
| [CSS](/docs/language-css.html) | &#9989; | &#10060; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; |
| [JSON](/docs/language-json.html) | &#9989; | &#10060; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#10060; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#10060; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#10060; |
| [Vue](/docs/language-vue.html) | &#9989; | &#10060; |
</details>
## Examples
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
a => {};
(a) => {};
(a, b) => {};
```
</details>
<details><summary><strong>🔧 `"always"`</strong></summary>
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
</details>
<details><summary><strong>🔧 `"as-needed"`</strong></summary>
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
</details>