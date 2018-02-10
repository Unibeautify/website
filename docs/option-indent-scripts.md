---
id: option-indent-scripts
title: Indent Scripts
sidebar_label: ✅ Indent Scripts
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `indent_scripts`

**Description**: Indent scripts

**Type**: `string`

**Default**: `"normal"`

**Allowed values**: `"keep"` or `"separate"` or `"normal"`

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
<html>

<body>
<script>
console.log("hello world");
</script>
</body>

</html>
```
</details>
<details><summary><strong>🔧 `"keep"`</strong></summary>
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
    "indent_scripts": "keep"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: keep
===================================================================
--- keep	Original
+++ keep	Beautified
@@ -1,9 +1,9 @@
 <html>␊
 ␊
 <body>␊
-<script>␊
-console.log("hello␣world");␊
-</script>␊
+␣␣<script>␊
+␣␣console.log("hello␣world");␊
+␣␣</script>␊
 </body>␊
 ␊
 </html>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `"separate"`</strong></summary>
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
    "indent_scripts": "separate"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: separate
===================================================================
--- separate	Original
+++ separate	Beautified
@@ -1,9 +1,9 @@
 <html>␊
 ␊
 <body>␊
-<script>␊
+␣␣<script>␊
 console.log("hello␣world");␊
-</script>␊
+␣␣</script>␊
 </body>␊
 ␊
 </html>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `"normal"`</strong></summary>
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
    "indent_scripts": "normal"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: normal
===================================================================
--- normal	Original
+++ normal	Beautified
@@ -1,9 +1,9 @@
 <html>␊
 ␊
 <body>␊
-<script>␊
-console.log("hello␣world");␊
-</script>␊
+␣␣<script>␊
+␣␣␣␣console.log("hello␣world");␊
+␣␣</script>␊
 </body>␊
 ␊
 </html>
\ No newline at end of file

```
</details>
</details>