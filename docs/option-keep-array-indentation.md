---
id: option-keep-array-indentation
title: Keep Array Indentation
sidebar_label: ✅ Keep Array Indentation
custom_edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `keep_array_indentation`

**Description**: Preserve array indentation

**Type**: `boolean`

**Default**: `false`

## Support
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../scripts/generate-docs/beautifiers.ts" target="_blank">Edit Beautifiers</a></div>

**Languages**: [EJS](/docs/language-ejs.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) |
| --- | --- |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
</details>
## Examples
### EJS
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/EJS/new?filename=keep_array_indentation.txt&value=Type%20Example%20Here" target="_blank">Add EJS Example</a></div>

No example found. Please submit a Pull Request!
### JSON
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSON/new?filename=keep_array_indentation.txt&value=Type%20Example%20Here" target="_blank">Add JSON Example</a></div>

No example found. Please submit a Pull Request!
### JSX
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSX/new?filename=keep_array_indentation.txt&value=Type%20Example%20Here" target="_blank">Add JSX Example</a></div>

No example found. Please submit a Pull Request!
### JavaScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/keep_array_indentation.txt" target="_blank">Edit JavaScript Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
const arr = [
      "a", "b",
 "c",
     "d",
];

```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const arr = [
      "a", "b",
 "c",
     "d",
];
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "keep_array_indentation": true
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
@@ -1,5 +1,5 @@
 const␣arr␣=␣[␊
 ␣␣␣␣␣␣"a",␣"b",␊
 ␣"c",␊
 ␣␣␣␣␣"d",␊
-];␊
+];
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const arr = [
  "a", "b",
  "c",
  "d",
];
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "keep_array_indentation": false
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
@@ -1,5 +1,5 @@
 const␣arr␣=␣[␊
-␣␣␣␣␣␣"a",␣"b",␊
-␣"c",␊
-␣␣␣␣␣"d",␊
-];␊
+␣␣"a",␣"b",␊
+␣␣"c",␊
+␣␣"d",␊
+];
\ No newline at end of file

```
</details>
</details>