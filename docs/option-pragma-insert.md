---
id: option-pragma-insert
title: Pragma Insert
sidebar_label: ✅ Pragma Insert
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `pragma_insert`

**Description**: Insert a marker at the top of a file specifying the file has been beautified

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html), [Vue](/docs/language-vue.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

<details><summary><strong>Comparison Table</strong></summary>
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
| [Vue](/docs/language-vue.html) | &#9989; |
</details>
## Examples
### CSS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/CSS/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add CSS Example</a></div>

No example found. Please submit a Pull Request!
### GraphQL
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/GraphQL/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add GraphQL Example</a></div>

No example found. Please submit a Pull Request!
### JSON
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSON/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add JSON Example</a></div>

No example found. Please submit a Pull Request!
### JSX
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSX/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add JSX Example</a></div>

No example found. Please submit a Pull Request!
### JavaScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/pragma_insert.txt" target="_blank">Edit JavaScript Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
function sayHello() {
console.log("Hello world");
}
```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
/** @format */

function sayHello() {
  console.log("Hello world");
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "pragma_insert": true
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: true
===================================================================
--- true	Original
+++ true	Beautified
@@ -1,3 +1,5 @@
+/**␣@format␣*/␊
+␊
 function␣sayHello()␣{␊
\ No newline at end of file
-console.log("Hello␣world");␊
-}
+␣␣console.log("Hello␣world");␊
+}␊

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
function sayHello() {
  console.log("Hello world");
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "pragma_insert": false
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: false
===================================================================
--- false	Original
+++ false	Beautified
@@ -1,3 +1,3 @@
 function␣sayHello()␣{␊
-console.log("Hello␣world");␊
-}
\ No newline at end of file
+␣␣console.log("Hello␣world");␊
+}␊

```
</details>
</details>
### Less
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Less/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add Less Example</a></div>

No example found. Please submit a Pull Request!
### SCSS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/SCSS/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add SCSS Example</a></div>

No example found. Please submit a Pull Request!
### TypeScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/TypeScript/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add TypeScript Example</a></div>

No example found. Please submit a Pull Request!
### Vue
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Vue/new?filename=pragma_insert.txt&value=Type%20Example%20Here" target="_blank">Add Vue Example</a></div>

No example found. Please submit a Pull Request!