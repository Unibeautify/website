---
id: option-end-with-semicolon
title: End With Semicolon
---
**Key**: `end_with_semicolon`

**Description**: Insert a semicolon at the end of statements

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [CSS](/docs/language-css.html), [GraphQL](/docs/language-graphql.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [TypeScript](/docs/language-typescript.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### JavaScript
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
## `true`
### JavaScript
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
## `false`
### JavaScript
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