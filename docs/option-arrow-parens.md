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
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../scripts/generate-docs/beautifiers.ts" target="_blank">Edit Beautifiers</a></div>

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
### CSS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/CSS/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add CSS Example</a></div>

No example found. Please submit a Pull Request!
### GraphQL
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/GraphQL/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add GraphQL Example</a></div>

No example found. Please submit a Pull Request!
### JSON
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSON/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add JSON Example</a></div>

No example found. Please submit a Pull Request!
### JSX
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSX/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add JSX Example</a></div>

No example found. Please submit a Pull Request!
### JavaScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/arrow_parens.txt" target="_blank">Edit JavaScript Example</a></div>

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
### Less
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Less/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add Less Example</a></div>

No example found. Please submit a Pull Request!
### SCSS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/SCSS/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add SCSS Example</a></div>

No example found. Please submit a Pull Request!
### TypeScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/TypeScript/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add TypeScript Example</a></div>

No example found. Please submit a Pull Request!
### Vue
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Vue/new?filename=arrow_parens.txt&value=Type%20Example%20Here" target="_blank">Add Vue Example</a></div>

No example found. Please submit a Pull Request!