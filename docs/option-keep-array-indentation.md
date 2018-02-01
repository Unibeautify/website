---
id: option-keep-array-indentation
title: Keep Array Indentation
sidebar_label: ✅ Keep Array Indentation
---
**Key**: `keep_array_indentation`

**Description**: Preserve array indentation

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [EJS](/docs/language-ejs.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) |
| --- | --- |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
## Examples
### JavaScript
#### 🚧 Original Code
```JavaScript
const arr = [
      "a", "b",
 "c",
     "d",
];

```
#### 🔧 `true`
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
#### 🔧 `false`
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