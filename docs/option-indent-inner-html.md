---
id: option-indent-inner-html
title: Indent Inner Html
sidebar_label: ✅ Indent Inner Html
custom_edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `indent_inner_html`

**Description**: Indent <head> and <body> sections.

**Type**: `boolean`

**Default**: `false`

## Support
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../scripts/generate-docs/beautifiers.ts" target="_blank">Edit Beautifiers</a></div>

**Languages**: [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [XML](/docs/language-xml.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) |
| --- | --- |
| [HTML](/docs/language-html.html) | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#9989; |
| [Liquid](/docs/language-liquid.html) | &#9989; |
| [Mustache](/docs/language-mustache.html) | &#9989; |
| [XML](/docs/language-xml.html) | &#9989; |
</details>
## Examples
### HTML
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/HTML/indent_inner_html.txt" target="_blank">Edit HTML Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```HTML
<html><head></head><body></body></html>
```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>

  <head></head>

  <body></body>

</html>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_inner_html": true
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
@@ -1,1 +1,7 @@
-<html><head></head><body></body></html>
\ No newline at end of file
+<html>␊
+␊
+␣␣<head></head>␊
+␊
+␣␣<body></body>␊
+␊
+</html>

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>

<head></head>

<body></body>

</html>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_inner_html": false
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
@@ -1,1 +1,7 @@
-<html><head></head><body></body></html>
\ No newline at end of file
+<html>␊
+␊
+<head></head>␊
+␊
+<body></body>␊
+␊
+</html>

```
</details>
</details>
### Handlebars
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Handlebars/new?filename=indent_inner_html.txt&value=Type%20Example%20Here" target="_blank">Add Handlebars Example</a></div>

No example found. Please submit a Pull Request!
### Liquid
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Liquid/new?filename=indent_inner_html.txt&value=Type%20Example%20Here" target="_blank">Add Liquid Example</a></div>

No example found. Please submit a Pull Request!
### Mustache
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/Mustache/new?filename=indent_inner_html.txt&value=Type%20Example%20Here" target="_blank">Add Mustache Example</a></div>

No example found. Please submit a Pull Request!
### XML
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/new/master/docs/../examples/XML/new?filename=indent_inner_html.txt&value=Type%20Example%20Here" target="_blank">Add XML Example</a></div>

No example found. Please submit a Pull Request!