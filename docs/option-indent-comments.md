---
id: option-indent-comments
title: Indent Comments
sidebar_label: Indent Comments (✅)
---
**Key**: `indent_comments`

**Description**: Determines whether comments should be indented.

**Type**: `boolean`

**Default**: `true`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Pretty Diff](/docs/beautifier-pretty-diff.html)

| Language | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- |
| [C#](/docs/language-csharp.html) | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; |
| [CSV](/docs/language-csv.html) | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#9989; |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [HTML](/docs/language-html.html) | &#9989; |
| [HTML+ERB](/docs/language-html%2Berb.html) | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; |
| [Java](/docs/language-java.html) | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; |
| [Less](/docs/language-less.html) | &#9989; |
| [Riot](/docs/language-riot.html) | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; |
| [SVG](/docs/language-svg.html) | &#9989; |
| [Sass](/docs/language-sass.html) | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#9989; |
| [Swig](/docs/language-swig.html) | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#9989; |
| [Twig](/docs/language-twig.html) | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#9989; |
| [XML](/docs/language-xml.html) | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#9989; |
## Examples
### JavaScript
#### Original Code
```JavaScript
/*
This 
   is 
      a
        test
*/
// This
//   is
//      a
//        test

// Comment
if (a) {
// Comment
      // Comment
      b = c;
// Comment
function foo(d) {
          // Comment
          e = f;
  }
}

  // Comment
if (a) {
  // Comment
  b = c;
  // Comment
  function foo(d) {
      // Comment
      e = f;
  }
}

// Comment
if (a) {
// Comment
  b = c;
// Comment
  function foo(d) {
// Comment
      e = f;
  }
}

// Comment
foo.bar.baz();

```
#### `true`
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```JavaScript
/*
This
   is
      a
        test
*/
// This
//   is
//      a
//        test
// Comment
if (a) {
  // Comment
  // Comment
  b = c;
  // Comment
  function foo(d) {
    // Comment
    e = f;
  }
}
// Comment
if (a) {
  // Comment
  b = c;
  // Comment
  function foo(d) {
    // Comment
    e = f;
  }
}
// Comment
if (a) {
  // Comment
  b = c;
  // Comment
  function foo(d) {
    // Comment
    e = f;
  }
}
// Comment
foo.bar.baz();
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_comments": true
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
@@ -1,47 +1,43 @@
 /*␊
-This␣␊
-␣␣␣is␣␊
+This␊
+␣␣␣is␊
 ␣␣␣␣␣␣a␊
 ␣␣␣␣␣␣␣␣test␊
 */␊
 //␣This␊
 //␣␣␣is␊
 //␣␣␣␣␣␣a␊
 //␣␣␣␣␣␣␣␣test␊
-␊
 //␣Comment␊
 if␣(a)␣{␊
-//␣Comment␊
-␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣b␣=␣c;␊
-//␣Comment␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣//␣Comment␊
+␣␣//␣Comment␊
+␣␣b␣=␣c;␊
+␣␣//␣Comment␊
+␣␣function␣foo(d)␣{␊
+␣␣␣␣//␣Comment␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
-␣␣//␣Comment␊
+//␣Comment␊
 if␣(a)␣{␊
 ␣␣//␣Comment␊
 ␣␣b␣=␣c;␊
 ␣␣//␣Comment␊
 ␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣//␣Comment␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
 //␣Comment␊
 if␣(a)␣{␊
-//␣Comment␊
+␣␣//␣Comment␊
 ␣␣b␣=␣c;␊
-//␣Comment␊
+␣␣//␣Comment␊
 ␣␣function␣foo(d)␣{␊
-//␣Comment␊
-␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣//␣Comment␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
 //␣Comment␊
-foo.bar.baz();␊
+foo.bar.baz();
\ No newline at end of file

```
</details>
#### `false`
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```JavaScript
/*
This
   is
      a
        test
*/
// This
//   is
//      a
//        test
// Comment
if (a) {
// Comment
// Comment
  b = c;
// Comment
  function foo(d) {
// Comment
    e = f;
  }
}
// Comment
if (a) {
// Comment
  b = c;
// Comment
  function foo(d) {
// Comment
    e = f;
  }
}
// Comment
if (a) {
// Comment
  b = c;
// Comment
  function foo(d) {
// Comment
    e = f;
  }
}
// Comment
foo.bar.baz();
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_comments": false
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
@@ -1,47 +1,43 @@
 /*␊
-This␣␊
-␣␣␣is␣␊
+This␊
+␣␣␣is␊
 ␣␣␣␣␣␣a␊
 ␣␣␣␣␣␣␣␣test␊
 */␊
 //␣This␊
 //␣␣␣is␊
 //␣␣␣␣␣␣a␊
 //␣␣␣␣␣␣␣␣test␊
-␊
 //␣Comment␊
 if␣(a)␣{␊
 //␣Comment␊
-␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣b␣=␣c;␊
 //␣Comment␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣b␣=␣c;␊
+//␣Comment␊
+␣␣function␣foo(d)␣{␊
+//␣Comment␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
-␣␣//␣Comment␊
+//␣Comment␊
 if␣(a)␣{␊
-␣␣//␣Comment␊
+//␣Comment␊
 ␣␣b␣=␣c;␊
-␣␣//␣Comment␊
+//␣Comment␊
 ␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣//␣Comment␊
-␣␣␣␣␣␣e␣=␣f;␊
+//␣Comment␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
 //␣Comment␊
 if␣(a)␣{␊
 //␣Comment␊
 ␣␣b␣=␣c;␊
 //␣Comment␊
 ␣␣function␣foo(d)␣{␊
 //␣Comment␊
-␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
-␊
 //␣Comment␊
-foo.bar.baz();␊
+foo.bar.baz();
\ No newline at end of file

```
</details>