---
id: option-indent-comments
title: Indent Comments
sidebar_label: Indent Comments (✅)
---
**Key**: `indent_comments`

**Description**: Determines whether comments should be indented.

**Type**: `boolean`

**Default**: `true`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## JavaScript
### Original Code
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
### `true`
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
### `false`
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