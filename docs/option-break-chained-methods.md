---
id: option-break-chained-methods
title: Break Chained Methods
sidebar_label: ✅ Break Chained Methods
edit_url: https://github.com/unibeautify/unibeautify/edit/master/src/options.ts
---
**Key**: `break_chained_methods`

**Description**: Break chained method calls across subsequent lines

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html), [ESLint](/docs/beautifier-eslint.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [JS-Beautify](/docs/beautifier-js-beautify.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) | [ESLint](/docs/beautifier-eslint.html) |
| --- | --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#9989; | &#10060; |
| [CSS](/docs/language-css.html) | &#10060; | &#9989; | &#10060; |
| [CSV](/docs/language-csv.html) | &#10060; | &#9989; | &#10060; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#9989; | &#10060; |
| [EJS](/docs/language-ejs.html) | &#9989; | &#9989; | &#10060; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; | &#10060; |
| [HTML+ERB](/docs/language-html-erb.html) | &#10060; | &#9989; | &#10060; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; | &#10060; |
| [JSON](/docs/language-json.html) | &#9989; | &#9989; | &#10060; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#9989; | &#10060; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#10060; | &#9989; | &#10060; |
| [Riot](/docs/language-riot.html) | &#10060; | &#9989; | &#10060; |
| [SCSS](/docs/language-scss.html) | &#10060; | &#9989; | &#10060; |
| [SVG](/docs/language-svg.html) | &#10060; | &#9989; | &#10060; |
| [Sass](/docs/language-sass.html) | &#10060; | &#9989; | &#10060; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#9989; | &#10060; |
| [Swig](/docs/language-swig.html) | &#10060; | &#9989; | &#10060; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#9989; | &#10060; |
| [Twig](/docs/language-twig.html) | &#10060; | &#9989; | &#10060; |
| [TypeScript](/docs/language-typescript.html) | &#10060; | &#9989; | &#10060; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#9989; | &#10060; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; | &#10060; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#9989; | &#10060; |
</details>
## Examples
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
```JavaScript
foo.bar().baz();

this.$("#fileName").val().addClass("disabled")
    .prop("disabled", true)

function doStuff() {
if (oParameters.State !== ui().s2p().mm().supplinvoice().manage().util().Constants().blabla()) {
return false;
}
}

```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo.bar()
  .baz();

this.$("#fileName")
  .val()
  .addClass("disabled")
  .prop("disabled", true)

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
@@ -1,10 +1,20 @@
-foo.bar().baz();␊
+foo.bar()␊
+␣␣.baz();␊
 ␊
-this.$("#fileName").val().addClass("disabled")␊
-␣␣␣␣.prop("disabled",␣true)␊
+this.$("#fileName")␊
+␣␣.val()␊
+␣␣.addClass("disabled")␊
+␣␣.prop("disabled",␣true)␊
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
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```JavaScript
foo.bar().baz();

this.$("#fileName").val().addClass("disabled")
  .prop("disabled", true)

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
@@ -1,10 +1,10 @@
 foo.bar().baz();␊
 ␊
 this.$("#fileName").val().addClass("disabled")␊
-␣␣␣␣.prop("disabled",␣true)␊
+␣␣.prop("disabled",␣true)␊
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
</details>