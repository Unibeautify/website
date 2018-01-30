---
id: option-object-curly-spacing
title: Object Curly Spacing
---
**Key**: `object_curly_spacing`

**Description**: Inserts a space before/after brackets for object literals, destructuring assignments, and import/export specifiers

**Type**: `boolean`

**Default**: `true`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };
```
## `true`
### JavaScript
```JavaScript
// simple object literals
var obj = { foo: "bar" };

// nested object literals
var obj = { foo: { zoo: "bar" } };

// destructuring assignment (EcmaScript 6)
var { x, y } = y;

// import/export declarations (EcmaScript 6)
import { foo } from "bar";
export { foo };

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "object_curly_spacing": true
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
@@ -8,5 +8,5 @@
 var␣{␣x,␣y␣}␣=␣y;␊
 ␊
 //␣import/export␣declarations␣(EcmaScript␣6)␊
 import␣{␣foo␣}␣from␣"bar";␊
-export␣{␣foo␣};
\ No newline at end of file
+export␣{␣foo␣};␊

```
</details>
## `false`
### JavaScript
```JavaScript
// simple object literals
var obj = {foo: "bar"};

// nested object literals
var obj = {foo: {zoo: "bar"}};

// destructuring assignment (EcmaScript 6)
var {x, y} = y;

// import/export declarations (EcmaScript 6)
import {foo} from "bar";
export {foo};

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "object_curly_spacing": false
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
@@ -1,12 +1,12 @@
 //␣simple␣object␣literals␊
-var␣obj␣=␣{␣foo:␣"bar"␣};␊
+var␣obj␣=␣{foo:␣"bar"};␊
 ␊
 //␣nested␣object␣literals␊
-var␣obj␣=␣{␣foo:␣{␣zoo:␣"bar"␣}␣};␊
+var␣obj␣=␣{foo:␣{zoo:␣"bar"}};␊
 ␊
 //␣destructuring␣assignment␣(EcmaScript␣6)␊
-var␣{␣x,␣y␣}␣=␣y;␊
+var␣{x,␣y}␣=␣y;␊
 ␊
\ No newline at end of file
 //␣import/export␣declarations␣(EcmaScript␣6)␊
-import␣{␣foo␣}␣from␣"bar";␊
-export␣{␣foo␣};
+import␣{foo}␣from␣"bar";␊
+export␣{foo};␊

```
</details>