---
id: option-end-with-semicolon
title: End With Semicolon
sidebar_label: ✅ End With Semicolon
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `end_with_semicolon`

**Description**: Insert a semicolon at the end of statements

**Type**: `boolean`

**Default**: `false`

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
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/CSS/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add CSS Example</a></div>

No example found. Please submit a Pull Request!
### GraphQL
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/GraphQL/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add GraphQL Example</a></div>

No example found. Please submit a Pull Request!
### JSON
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSON/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add JSON Example</a></div>

No example found. Please submit a Pull Request!
### JSX
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSX/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add JSX Example</a></div>

No example found. Please submit a Pull Request!
### JavaScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/end_with_semicolon.txt" target="_blank">Edit JavaScript Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
var str1 = "Unibeautify"
var str2 = "Unibeautify";
var method1 = function() {
    console.log(str1)
}
var method2 = function() {
    console.log(str2);
};
method1()
method2();
```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
var str1 = "Unibeautify";
var str2 = "Unibeautify";
var method1 = function() {
  console.log(str1);
};
var method2 = function() {
  console.log(str2);
};
method1();
method2();

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_semicolon": true
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
@@ -1,10 +1,10 @@
-var␣str1␣=␣"Unibeautify"␊
+var␣str1␣=␣"Unibeautify";␊
 var␣str2␣=␣"Unibeautify";␊
 var␣method1␣=␣function()␣{␊
-␣␣␣␣console.log(str1)␊
-}␊
+␣␣console.log(str1);␊
+};␊
 var␣method2␣=␣function()␣{␊
-␣␣␣␣console.log(str2);␊
\ No newline at end of file
+␣␣console.log(str2);␊
 };␊
-method1()␊
-method2();
+method1();␊
+method2();␊

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
var str1 = "Unibeautify"
var str2 = "Unibeautify"
var method1 = function() {
  console.log(str1)
}
var method2 = function() {
  console.log(str2)
}
method1()
method2()

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_semicolon": false
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
@@ -1,10 +1,10 @@
 var␣str1␣=␣"Unibeautify"␊
-var␣str2␣=␣"Unibeautify";␊
+var␣str2␣=␣"Unibeautify"␊
 var␣method1␣=␣function()␣{␊
-␣␣␣␣console.log(str1)␊
+␣␣console.log(str1)␊
 }␊
 var␣method2␣=␣function()␣{␊
-␣␣␣␣console.log(str2);␊
-};␊
\ No newline at end of file
+␣␣console.log(str2)␊
+}␊
 method1()␊
-method2();
+method2()␊

```
</details>
</details>
### Less
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Less/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add Less Example</a></div>

No example found. Please submit a Pull Request!
### SCSS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/SCSS/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add SCSS Example</a></div>

No example found. Please submit a Pull Request!
### TypeScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/TypeScript/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add TypeScript Example</a></div>

No example found. Please submit a Pull Request!
### Vue
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Vue/new?filename=end_with_semicolon.txt&value=Type%20Example%20Here" target="_blank">Add Vue Example</a></div>

No example found. Please submit a Pull Request!