---
id: option-break-chained-methods
title: Break Chained Methods
---
**Key**: `break_chained_methods`

**Description**: Break chained method calls across subsequent lines

**Type**: `boolean`

**Default**: `false`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## JavaScript
### Original Code
```JavaScript
foo.bar().baz();

foo
.bar()

.baz();

foo
.bar()
// some comment here
.baz();

this.$("#fileName").val().addClass("disabled")
    .prop("disabled", true)

$('#items')
  .find('.selected')
    .highlight()
    .end()
  .find('.open')
    .updateCount();

function doStuff() {
if (oParameters.State !== ui().s2p().mm().supplinvoice().manage().util().Constants().blabla()) {
return false;
}
}

```
### `true`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo.bar()
  .baz();

foo
  .bar()

  .baz();

foo
  .bar()
  // some comment here
  .baz();

this.$("#fileName")
  .val()
  .addClass("disabled")
  .prop("disabled", true)

$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount();

function doStuff() {
  if (oParameters.State !== ui()
    .s2p()
    .mm()
    .supplinvoice()
    .manage()
    .util()
    .Constants()
    .blabla()) {
    return false;
  }
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "break_chained_methods": true
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
@@ -1,27 +1,37 @@
-foo.bar().baz();␊
+foo.bar()␊
+␣␣.baz();␊
 ␊
 foo␊
-.bar()␊
+␣␣.bar()␊
 ␊
-.baz();␊
+␣␣.baz();␊
 ␊
 foo␊
-.bar()␊
-//␣some␣comment␣here␊
-.baz();␊
+␣␣.bar()␊
+␣␣//␣some␣comment␣here␊
+␣␣.baz();␊
 ␊
-this.$("#fileName").val().addClass("disabled")␊
-␣␣␣␣.prop("disabled",␣true)␊
+this.$("#fileName")␊
+␣␣.val()␊
+␣␣.addClass("disabled")␊
+␣␣.prop("disabled",␣true)␊
 ␊
 $('#items')␊
 ␣␣.find('.selected')␊
-␣␣␣␣.highlight()␊
-␣␣␣␣.end()␊
+␣␣.highlight()␊
+␣␣.end()␊
 ␣␣.find('.open')␊
-␣␣␣␣.updateCount();␊
+␣␣.updateCount();␊
 ␊
 function␣doStuff()␣{␊
-if␣(oParameters.State␣!==␣ui().s2p().mm().supplinvoice().manage().util().Constants().blabla())␣{␊
-return␣false;␊
-}␊
-}␊
+␣␣if␣(oParameters.State␣!==␣ui()␊
+␣␣␣␣.s2p()␊
+␣␣␣␣.mm()␊
+␣␣␣␣.supplinvoice()␊
+␣␣␣␣.manage()␊
+␣␣␣␣.util()␊
+␣␣␣␣.Constants()␊
+␣␣␣␣.blabla())␣{␊
+␣␣␣␣return␣false;␊
+␣␣}␊
+}
\ No newline at end of file

```
</details>
### `false`
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo.bar().baz();

foo
  .bar()

  .baz();

foo
  .bar()
  // some comment here
  .baz();

this.$("#fileName").val().addClass("disabled")
  .prop("disabled", true)

$('#items')
  .find('.selected')
  .highlight()
  .end()
  .find('.open')
  .updateCount();

function doStuff() {
  if (oParameters.State !== ui().s2p().mm().supplinvoice().manage().util().Constants().blabla()) {
    return false;
  }
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "break_chained_methods": false
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
@@ -1,27 +1,27 @@
 foo.bar().baz();␊
 ␊
 foo␊
-.bar()␊
+␣␣.bar()␊
 ␊
-.baz();␊
+␣␣.baz();␊
 ␊
 foo␊
-.bar()␊
-//␣some␣comment␣here␊
-.baz();␊
+␣␣.bar()␊
+␣␣//␣some␣comment␣here␊
+␣␣.baz();␊
 ␊
 this.$("#fileName").val().addClass("disabled")␊
-␣␣␣␣.prop("disabled",␣true)␊
+␣␣.prop("disabled",␣true)␊
 ␊
 $('#items')␊
 ␣␣.find('.selected')␊
-␣␣␣␣.highlight()␊
-␣␣␣␣.end()␊
+␣␣.highlight()␊
+␣␣.end()␊
 ␣␣.find('.open')␊
-␣␣␣␣.updateCount();␊
+␣␣.updateCount();␊
 ␊
 function␣doStuff()␣{␊
-if␣(oParameters.State␣!==␣ui().s2p().mm().supplinvoice().manage().util().Constants().blabla())␣{␊
-return␣false;␊
-}␊
-}␊
+␣␣if␣(oParameters.State␣!==␣ui().s2p().mm().supplinvoice().manage().util().Constants().blabla())␣{␊
+␣␣␣␣return␣false;␊
+␣␣}␊
+}
\ No newline at end of file

```
</details>