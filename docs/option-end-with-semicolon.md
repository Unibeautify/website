---
id: option-end-with-semicolon
title: End With Semicolon
sidebar_label: ✅ End With Semicolon
---
**Key**: `end_with_semicolon`

**Description**: Insert a semicolon at the end of statements

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [ESLint](/docs/beautifier-eslint.html)

| Language | [Prettier](/docs/beautifier-prettier.html) | [ESLint](/docs/beautifier-eslint.html) |
| --- | --- | --- |
| [CSS](/docs/language-css.html) | &#9989; | &#10060; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; |
| [JSON](/docs/language-json.html) | &#9989; | &#10060; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#10060; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#10060; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#10060; |
## Examples
### JavaScript
#### 🚧 Original Code
```JavaScript
var str1 = "Unibeautify"
var str2 = "Unibeautify";
var method1 = function() {
    console.log(str1)
}
var method2 = function() {
    console.log(str2);
};
method1()
method2();
```
#### 🔧 `true`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
var str1 = "Unibeautify";
var str2 = "Unibeautify";
var method1 = function() {
  console.log(str1);
};
var method2 = function() {
  console.log(str2);
};
method1();
method2();

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_semicolon": true
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
@@ -1,10 +1,10 @@
-var␣str1␣=␣"Unibeautify"␊
+var␣str1␣=␣"Unibeautify";␊
 var␣str2␣=␣"Unibeautify";␊
 var␣method1␣=␣function()␣{␊
-␣␣␣␣console.log(str1)␊
-}␊
+␣␣console.log(str1);␊
+};␊
 var␣method2␣=␣function()␣{␊
-␣␣␣␣console.log(str2);␊
\ No newline at end of file
+␣␣console.log(str2);␊
 };␊
-method1()␊
-method2();
+method1();␊
+method2();␊

```
</details>
#### 🔧 `false`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
var str1 = "Unibeautify"
var str2 = "Unibeautify"
var method1 = function() {
  console.log(str1)
}
var method2 = function() {
  console.log(str2)
}
method1()
method2()

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "end_with_semicolon": false
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
@@ -1,10 +1,10 @@
 var␣str1␣=␣"Unibeautify"␊
-var␣str2␣=␣"Unibeautify";␊
+var␣str2␣=␣"Unibeautify"␊
 var␣method1␣=␣function()␣{␊
-␣␣␣␣console.log(str1)␊
+␣␣console.log(str1)␊
 }␊
 var␣method2␣=␣function()␣{␊
-␣␣␣␣console.log(str2);␊
-};␊
\ No newline at end of file
+␣␣console.log(str2)␊
+}␊
 method1()␊
-method2();
+method2()␊

```
</details>