---
id: option-newline-before-tags
title: Newline Before Tags
sidebar_label: ✅ Newline Before Tags
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `newline_before_tags`

**Description**: List of tags which should have an extra newline before them.

**Type**: `array of strings`

**Default**: `["head","body","/html"]`

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
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/HTML/newline_before_tags.txt" target="_blank">Edit HTML Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```HTML
<html>
<head></head>
<body>
  <div>
    <span>Hello world</span>
  </div>
</body>
</html>
```
</details>
<details><summary><strong>🔧 `[]`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>
<head></head>
<body>
  <div>
    <span>Hello world</span>
  </div>
</body>
</html>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "newline_before_tags": []
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 
===================================================================
--- 	Original
+++ 	Beautified

```
</details>
</details>
<details><summary><strong>🔧 `["head","body","/html"]`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>

<head></head>

<body>
  <div>
    <span>Hello world</span>
  </div>
</body>

</html>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " ",
    "newline_before_tags": [
      "head",
      "body",
      "/html"
    ]
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: head,body,/html
===================================================================
--- head,body,/html	Original
+++ head,body,/html	Beautified
@@ -1,8 +1,11 @@
 <html>␊
+␊
 <head></head>␊
+␊
 <body>␊
 ␣␣<div>␊
 ␣␣␣␣<span>Hello␣world</span>␊
 ␣␣</div>␊
 </body>␊
+␊
 </html>
\ No newline at end of file

```
</details>
</details>