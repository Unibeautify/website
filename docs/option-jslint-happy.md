---
id: option-jslint-happy
title: JSLint Happy
sidebar_label: ✅ JSLint Happy
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `jslint_happy`

**Description**: Enable jslint-stricter mode

**Type**: `boolean`

**Default**: `false`

## Support
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
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
const fun1 = function (arg1) {
}
const fun2 = function(arg1) {
}

```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const fun1 = function (arg1) {}
const fun2 = function (arg1) {}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "jslint_happy": true
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
@@ -1,4 +1,2 @@
-const␣fun1␣=␣function␣(arg1)␣{␊
-}␊
-const␣fun2␣=␣function(arg1)␣{␊
-}␊
+const␣fun1␣=␣function␣(arg1)␣{}␊
+const␣fun2␣=␣function␣(arg1)␣{}
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const fun1 = function(arg1) {}
const fun2 = function(arg1) {}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "jslint_happy": false
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
@@ -1,4 +1,2 @@
-const␣fun1␣=␣function␣(arg1)␣{␊
-}␊
-const␣fun2␣=␣function(arg1)␣{␊
-}␊
+const␣fun1␣=␣function(arg1)␣{}␊
+const␣fun2␣=␣function(arg1)␣{}
\ No newline at end of file

```
</details>
</details>