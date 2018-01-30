---
id: option-jsx-brackets
title: Jsx Brackets
---
**Key**: `jsx_brackets`

**Description**: Put the > of a multi-line JSX element at the end of the last line

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
```JavaScript
<div
className="HelloWorld"
title={`You are visitor number ${num}`}
onMouseOver={onMouseOver}
>
    hello world
</div>
```
## `true`
### JavaScript
```JavaScript
<div
  className="HelloWorld"
  title={`You are visitor number ${num}`}
  onMouseOver={onMouseOver}>
  hello world
</div>;

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "jsx_brackets": true
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
@@ -1,7 +1,6 @@
 <div␊
-className="HelloWorld"␊
-title={`You␣are␣visitor␣number␣${num}`}␊
-onMouseOver={onMouseOver}␊
->␊
-␣␣␣␣hello␣world␊
-</div>
\ No newline at end of file
+␣␣className="HelloWorld"␊
+␣␣title={`You␣are␣visitor␣number␣${num}`}␊
+␣␣onMouseOver={onMouseOver}>␊
+␣␣hello␣world␊
+</div>;␊

```
</details>
## `false`
### JavaScript
```JavaScript
<div
  className="HelloWorld"
  title={`You are visitor number ${num}`}
  onMouseOver={onMouseOver}
>
  hello world
</div>;

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "jsx_brackets": false
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
@@ -1,7 +1,7 @@
 <div␊
-className="HelloWorld"␊
-title={`You␣are␣visitor␣number␣${num}`}␊
-onMouseOver={onMouseOver}␊
+␣␣className="HelloWorld"␊
+␣␣title={`You␣are␣visitor␣number␣${num}`}␊
+␣␣onMouseOver={onMouseOver}␊
\ No newline at end of file
 >␊
-␣␣␣␣hello␣world␊
-</div>
+␣␣hello␣world␊
+</div>;␊

```
</details>