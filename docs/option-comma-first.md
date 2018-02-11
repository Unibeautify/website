---
id: option-comma-first
title: Comma First
sidebar_label: ✅ Comma First
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `comma_first`

**Description**: Put commas at the beginning of new line instead of end

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
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/EJS/new?filename=comma_first.txt&value=Type%20Example%20Here" target="_blank">Add EJS Example</a></div>

No example found. Please submit a Pull Request!
### JSON
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSON/new?filename=comma_first.txt&value=Type%20Example%20Here" target="_blank">Add JSON Example</a></div>

No example found. Please submit a Pull Request!
### JSX
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/JSX/new?filename=comma_first.txt&value=Type%20Example%20Here" target="_blank">Add JSX Example</a></div>

No example found. Please submit a Pull Request!
### JavaScript
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/JavaScript/comma_first.txt" target="_blank">Edit JavaScript Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
const a = "a", b = "b", c = "c";

```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const a = "a"
  , b = "b"
  , c = "c";
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "comma_first": true
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
@@ -1,1 +1,3 @@
-const␣a␣=␣"a",␣b␣=␣"b",␣c␣=␣"c";␊
+const␣a␣=␣"a"␊
+␣␣,␣b␣=␣"b"␊
+␣␣,␣c␣=␣"c";
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const a = "a",
  b = "b",
  c = "c";
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "comma_first": false
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
@@ -1,1 +1,3 @@
-const␣a␣=␣"a",␣b␣=␣"b",␣c␣=␣"c";␊
+const␣a␣=␣"a",␊
+␣␣b␣=␣"b",␊
+␣␣c␣=␣"c";
\ No newline at end of file

```
</details>
</details>