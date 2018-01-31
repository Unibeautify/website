---
id: option-pragma-insert
title: Pragma Insert
---
**Key**: `pragma_insert`

**Description**: Insert a marker at the top of a file specifying the file has been beautified

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## JavaScript
### Original Code
```JavaScript
function sayHello() {
console.log("Hello world");
}
```
### `true`
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
### `false`
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