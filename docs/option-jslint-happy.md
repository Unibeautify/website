---
id: option-jslint-happy
title: Jslint Happy
---
**Key**: `jslint_happy`

**Description**: Enable jslint-stricter mode

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [EJS](/docs/language-ejs.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html)

**Supported Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html)

# Examples
## JavaScript
### Original Code
```JavaScript
const fun1 = function (arg1) {
}
const fun2 = function(arg1) {
}

```
### `true`
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
### `false`
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