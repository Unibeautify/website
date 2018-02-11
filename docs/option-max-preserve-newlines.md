---
id: option-max-preserve-newlines
title: Max Preserve Newlines
sidebar_label: ✅ Max Preserve Newlines
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `max_preserve_newlines`

**Description**: Number of line-breaks to be preserved in one chunk

**Type**: `integer`

**Default**: `10`

## Support
**Languages**: [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [XML](/docs/language-xml.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) |
| --- | --- |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [HTML](/docs/language-html.html) | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
| [Liquid](/docs/language-liquid.html) | &#9989; |
| [Mustache](/docs/language-mustache.html) | &#9989; |
| [XML](/docs/language-xml.html) | &#9989; |
</details>
## Examples
### HTML
<div><a class="edit-page-link button" href="https://github.com/unibeautify/website/edit/master/docs/../examples/HTML/max_preserve_newlines.txt" target="_blank">Edit HTML Example</a></div>

<details><summary><strong>🚧 Original Code</strong></summary>
```HTML
<html>



<body>























<script>


console.log("hello world");


</script>


</body>



</html>
```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>

<body>
  <script>
    console.log("hello world");
  </script>
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
    "max_preserve_newlines": 0
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,42 +1,9 @@
 <html>␊
 ␊
-␊
-␊
 <body>␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-<script>␊
-␊
-␊
-console.log("hello␣world");␊
-␊
-␊
-</script>␊
-␊
-␊
+␣␣<script>␊
+␣␣␣␣console.log("hello␣world");␊
+␣␣</script>␊
 </body>␊
 ␊
-␊
-␊
 </html>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `10`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>



<body>










  <script>
    console.log("hello world");
  </script>


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
    "max_preserve_newlines": 10
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 10
===================================================================
--- 10	Original
+++ 10	Beautified
@@ -12,30 +12,13 @@
 ␊
 ␊
 ␊
 ␊
+␣␣<script>␊
+␣␣␣␣console.log("hello␣world");␊
+␣␣</script>␊
 ␊
 ␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-␊
-<script>␊
-␊
-␊
-console.log("hello␣world");␊
-␊
-␊
-</script>␊
-␊
-␊
 </body>␊
 ␊
 ␊
 ␊

```
</details>
</details>
<details><summary><strong>🔧 `20`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<html>



<body>




















  <script>
    console.log("hello world");
  </script>


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
    "max_preserve_newlines": 20
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 20
===================================================================
--- 20	Original
+++ 20	Beautified
@@ -22,20 +22,13 @@
 ␊
 ␊
 ␊
 ␊
+␣␣<script>␊
+␣␣␣␣console.log("hello␣world");␊
+␣␣</script>␊
 ␊
 ␊
-␊
-<script>␊
-␊
-␊
-console.log("hello␣world");␊
-␊
-␊
-</script>␊
-␊
-␊
 </body>␊
 ␊
 ␊
 ␊

```
</details>
</details>