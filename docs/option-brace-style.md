---
id: option-brace-style
title: Brace Style
sidebar_label: Brace Style (✅)
---
**Key**: `brace_style`

**Description**: [collapse|collapse-preserve-inline|expand|end-expand|none]

**Type**: `string`

**Default**: `"collapse"`

**Allowed values**: `"collapse"` or `"collapse-preserve-inline"` or `"expand"` or `"end-expand"` or `"none"`

## Support
**Languages**: [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [XML](/docs/language-xml.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) |
| --- | --- |
| [HTML](/docs/language-html.html) | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#9989; |
| [Liquid](/docs/language-liquid.html) | &#9989; |
| [Mustache](/docs/language-mustache.html) | &#9989; |
| [XML](/docs/language-xml.html) | &#9989; |
## Examples
### HTML
#### Original Code
```HTML
<div>
<h1>Unformatted</h1>
<div>
<span>Un<span>formatted</span></span>
</div>
<span><span>For</span><span>mat</span><span>ted</span></span>
<div><div>For</div><div>mat</div><div>ted</div></div>
</div>

```
#### `"collapse"`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <h1>Unformatted</h1>
  <div>
    <span>Un<span>formatted</span></span>
  </div>
  <span><span>For</span><span>mat</span><span>ted</span></span>
  <div>
    <div>For</div>
    <div>mat</div>
    <div>ted</div>
  </div>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "brace_style": "collapse"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: collapse
===================================================================
--- collapse	Original
+++ collapse	Beautified
@@ -1,8 +1,12 @@
 <div>␊
-<h1>Unformatted</h1>␊
-<div>␊
-<span>Un<span>formatted</span></span>␊
-</div>␊
-<span><span>For</span><span>mat</span><span>ted</span></span>␊
-<div><div>For</div><div>mat</div><div>ted</div></div>␊
-</div>␊
+␣␣<h1>Unformatted</h1>␊
+␣␣<div>␊
+␣␣␣␣<span>Un<span>formatted</span></span>␊
+␣␣</div>␊
+␣␣<span><span>For</span><span>mat</span><span>ted</span></span>␊
+␣␣<div>␊
+␣␣␣␣<div>For</div>␊
+␣␣␣␣<div>mat</div>␊
+␣␣␣␣<div>ted</div>␊
+␣␣</div>␊
+</div>
\ No newline at end of file

```
</details>
#### `"collapse-preserve-inline"`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <h1>Unformatted</h1>
  <div>
    <span>Un<span>formatted</span></span>
  </div>
  <span><span>For</span><span>mat</span><span>ted</span></span>
  <div>
    <div>For</div>
    <div>mat</div>
    <div>ted</div>
  </div>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "brace_style": "collapse-preserve-inline"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: collapse-preserve-inline
===================================================================
--- collapse-preserve-inline	Original
+++ collapse-preserve-inline	Beautified
@@ -1,8 +1,12 @@
 <div>␊
-<h1>Unformatted</h1>␊
-<div>␊
-<span>Un<span>formatted</span></span>␊
-</div>␊
-<span><span>For</span><span>mat</span><span>ted</span></span>␊
-<div><div>For</div><div>mat</div><div>ted</div></div>␊
-</div>␊
+␣␣<h1>Unformatted</h1>␊
+␣␣<div>␊
+␣␣␣␣<span>Un<span>formatted</span></span>␊
+␣␣</div>␊
+␣␣<span><span>For</span><span>mat</span><span>ted</span></span>␊
+␣␣<div>␊
+␣␣␣␣<div>For</div>␊
+␣␣␣␣<div>mat</div>␊
+␣␣␣␣<div>ted</div>␊
+␣␣</div>␊
+</div>
\ No newline at end of file

```
</details>
#### `"expand"`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <h1>Unformatted</h1>
  <div>
    <span>Un<span>formatted</span></span>
  </div>
  <span><span>For</span><span>mat</span><span>ted</span></span>
  <div>
    <div>For</div>
    <div>mat</div>
    <div>ted</div>
  </div>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "brace_style": "expand"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: expand
===================================================================
--- expand	Original
+++ expand	Beautified
@@ -1,8 +1,12 @@
 <div>␊
-<h1>Unformatted</h1>␊
-<div>␊
-<span>Un<span>formatted</span></span>␊
-</div>␊
-<span><span>For</span><span>mat</span><span>ted</span></span>␊
-<div><div>For</div><div>mat</div><div>ted</div></div>␊
-</div>␊
+␣␣<h1>Unformatted</h1>␊
+␣␣<div>␊
+␣␣␣␣<span>Un<span>formatted</span></span>␊
+␣␣</div>␊
+␣␣<span><span>For</span><span>mat</span><span>ted</span></span>␊
+␣␣<div>␊
+␣␣␣␣<div>For</div>␊
+␣␣␣␣<div>mat</div>␊
+␣␣␣␣<div>ted</div>␊
+␣␣</div>␊
+</div>
\ No newline at end of file

```
</details>
#### `"end-expand"`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <h1>Unformatted</h1>
  <div>
    <span>Un<span>formatted</span></span>
  </div>
  <span><span>For</span><span>mat</span><span>ted</span></span>
  <div>
    <div>For</div>
    <div>mat</div>
    <div>ted</div>
  </div>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "brace_style": "end-expand"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: end-expand
===================================================================
--- end-expand	Original
+++ end-expand	Beautified
@@ -1,8 +1,12 @@
 <div>␊
-<h1>Unformatted</h1>␊
-<div>␊
-<span>Un<span>formatted</span></span>␊
-</div>␊
-<span><span>For</span><span>mat</span><span>ted</span></span>␊
-<div><div>For</div><div>mat</div><div>ted</div></div>␊
-</div>␊
+␣␣<h1>Unformatted</h1>␊
+␣␣<div>␊
+␣␣␣␣<span>Un<span>formatted</span></span>␊
+␣␣</div>␊
+␣␣<span><span>For</span><span>mat</span><span>ted</span></span>␊
+␣␣<div>␊
+␣␣␣␣<div>For</div>␊
+␣␣␣␣<div>mat</div>␊
+␣␣␣␣<div>ted</div>␊
+␣␣</div>␊
+</div>
\ No newline at end of file

```
</details>
#### `"none"`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <h1>Unformatted</h1>
  <div>
    <span>Un<span>formatted</span></span>
  </div>
  <span><span>For</span><span>mat</span><span>ted</span></span>
  <div>
    <div>For</div>
    <div>mat</div>
    <div>ted</div>
  </div>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "brace_style": "none"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: none
===================================================================
--- none	Original
+++ none	Beautified
@@ -1,8 +1,12 @@
 <div>␊
-<h1>Unformatted</h1>␊
-<div>␊
-<span>Un<span>formatted</span></span>␊
-</div>␊
-<span><span>For</span><span>mat</span><span>ted</span></span>␊
-<div><div>For</div><div>mat</div><div>ted</div></div>␊
-</div>␊
+␣␣<h1>Unformatted</h1>␊
+␣␣<div>␊
+␣␣␣␣<span>Un<span>formatted</span></span>␊
+␣␣</div>␊
+␣␣<span><span>For</span><span>mat</span><span>ted</span></span>␊
+␣␣<div>␊
+␣␣␣␣<div>For</div>␊
+␣␣␣␣<div>mat</div>␊
+␣␣␣␣<div>ted</div>␊
+␣␣</div>␊
+</div>
\ No newline at end of file

```
</details>