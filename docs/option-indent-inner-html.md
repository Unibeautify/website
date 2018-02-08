---
id: option-indent-inner-html
title: Indent Inner Html
sidebar_label: ✅ Indent Inner Html
---
**Key**: `indent_inner_html`

**Description**: Indent <head> and <body> sections.

**Type**: `boolean`

**Default**: `false`

## Support
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