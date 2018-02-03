---
id: option-unindent-chained-methods
title: Unindent Chained Methods
sidebar_label: ✅ Unindent Chained Methods
---
**Key**: `unindent_chained_methods`

**Description**: Do not indent chained method calls

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
foo
.bar
.baz()

```
#### 🔧 `true`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo
.bar
.baz()
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "unindent_chained_methods": true
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
@@ -1,3 +1,3 @@
 foo␊
 .bar␊
-.baz()␊
+.baz()
\ No newline at end of file

```
</details>
#### 🔧 `false`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo
  .bar
  .baz()
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "unindent_chained_methods": false
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
@@ -1,3 +1,3 @@
 foo␊
-.bar␊
-.baz()␊
+␣␣.bar␊
+␣␣.baz()
\ No newline at end of file

```
</details>