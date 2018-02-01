---
id: option-pragma-insert
title: Pragma Insert
sidebar_label: Pragma Insert (✅)
---
**Key**: `pragma_insert`

**Description**: Insert a marker at the top of a file specifying the file has been beautified

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

| Language | [Prettier](/docs/beautifier-prettier.html) |
| --- | --- |
| [CSS](/docs/language-css.html) | &#9989; |
| [GraphQL](/docs/language-graphql.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
| [Less](/docs/language-less.html) | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; |
## Examples
### JavaScript
#### Original Code
```JavaScript
function sayHello() {
console.log("Hello world");
}
```
#### `true`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
/** @format */

function sayHello() {
  console.log("Hello world");
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "pragma_insert": true
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
@@ -1,3 +1,5 @@
+/**␣@format␣*/␊
+␊
 function␣sayHello()␣{␊
\ No newline at end of file
-console.log("Hello␣world");␊
-}
+␣␣console.log("Hello␣world");␊
+}␊

```
</details>
#### `false`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
function sayHello() {
  console.log("Hello world");
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "pragma_insert": false
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
 function␣sayHello()␣{␊
-console.log("Hello␣world");␊
-}
\ No newline at end of file
+␣␣console.log("Hello␣world");␊
+}␊

```
</details>