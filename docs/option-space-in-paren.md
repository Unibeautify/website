---
id: option-space-in-paren
title: Space In Paren
sidebar_label: Space In Paren (✅)
---
**Key**: `space_in_paren`

**Description**: Add padding spaces within paren, ie. f( a, b )

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
#### Original Code
```JavaScript
const fun1 = function(arg1, arg2) {
}
const fun2 = function(arg1,arg2) {
}
const fun3 = function( arg1, arg2 ) {
}

```
#### `true`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const fun1 = function( arg1, arg2 ) {}
const fun2 = function( arg1, arg2 ) {}
const fun3 = function( arg1, arg2 ) {}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "space_in_paren": true
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
@@ -1,6 +1,3 @@
-const␣fun1␣=␣function(arg1,␣arg2)␣{␊
-}␊
-const␣fun2␣=␣function(arg1,arg2)␣{␊
-}␊
-const␣fun3␣=␣function(␣arg1,␣arg2␣)␣{␊
-}␊
+const␣fun1␣=␣function(␣arg1,␣arg2␣)␣{}␊
+const␣fun2␣=␣function(␣arg1,␣arg2␣)␣{}␊
+const␣fun3␣=␣function(␣arg1,␣arg2␣)␣{}
\ No newline at end of file

```
</details>
#### `false`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
const fun1 = function(arg1, arg2) {}
const fun2 = function(arg1, arg2) {}
const fun3 = function(arg1, arg2) {}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "space_in_paren": false
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
@@ -1,6 +1,3 @@
-const␣fun1␣=␣function(arg1,␣arg2)␣{␊
-}␊
-const␣fun2␣=␣function(arg1,arg2)␣{␊
-}␊
-const␣fun3␣=␣function(␣arg1,␣arg2␣)␣{␊
-}␊
+const␣fun1␣=␣function(arg1,␣arg2)␣{}␊
+const␣fun2␣=␣function(arg1,␣arg2)␣{}␊
+const␣fun3␣=␣function(arg1,␣arg2)␣{}
\ No newline at end of file

```
</details>