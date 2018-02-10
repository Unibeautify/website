---
id: option-no-leading-zero
title: No Leading Zero
sidebar_label: ✅ No Leading Zero
---
**Key**: `no_leading_zero`

**Description**: If in CSS values leading 0s immediately preceeding a decimal should be removed or prevented.

**Type**: `boolean`

**Default**: `false`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Pretty Diff](/docs/beautifier-pretty-diff.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- |
| [C#](/docs/language-csharp.html) | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; |
| [CSV](/docs/language-csv.html) | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#9989; |
| [EJS](/docs/language-ejs.html) | &#9989; |
| [HTML](/docs/language-html.html) | &#9989; |
| [HTML+ERB](/docs/language-html-erb.html) | &#9989; |
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
</details>
## Examples
### CSS
<details><summary><strong>🚧 Original Code</strong></summary>
```CSS
.c1 {
    font-size: 0.3em;
    border-radius: 00000.5;
}
.c2 {
    font-size: 01.3em;
    border-radius: 01.5;
}
.c3 {
    font-size: 10.3em;
    border-radius: 10.5;
}
```
</details>
<details><summary><strong>🔧 `true`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```CSS
.c1 {
  font-size: .3em;
  border-radius: .5;
}
.c2 {
  font-size: 1.3em;
  border-radius: 1.5;
}
.c3 {
  font-size: 10.3em;
  border-radius: 10.5;
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 2,
    "indent_char": " ",
    "no_leading_zero": true
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
@@ -1,12 +1,12 @@
 .c1␣{␊
-␣␣␣␣font-size:␣0.3em;␊
-␣␣␣␣border-radius:␣00000.5;␊
+␣␣font-size:␣.3em;␊
+␣␣border-radius:␣.5;␊
 }␊
 .c2␣{␊
-␣␣␣␣font-size:␣01.3em;␊
-␣␣␣␣border-radius:␣01.5;␊
+␣␣font-size:␣1.3em;␊
+␣␣border-radius:␣1.5;␊
 }␊
 .c3␣{␊
-␣␣␣␣font-size:␣10.3em;␊
-␣␣␣␣border-radius:␣10.5;␊
+␣␣font-size:␣10.3em;␊
+␣␣border-radius:␣10.5;␊
 }
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `false`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```CSS
.c1 {
  font-size: 0.3em;
  border-radius: 0.5;
}
.c2 {
  font-size: 1.3em;
  border-radius: 1.5;
}
.c3 {
  font-size: 10.3em;
  border-radius: 10.5;
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 2,
    "indent_char": " ",
    "no_leading_zero": false
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
 .c1␣{␊
-␣␣␣␣font-size:␣0.3em;␊
-␣␣␣␣border-radius:␣00000.5;␊
+␣␣font-size:␣0.3em;␊
+␣␣border-radius:␣0.5;␊
 }␊
 .c2␣{␊
-␣␣␣␣font-size:␣01.3em;␊
-␣␣␣␣border-radius:␣01.5;␊
+␣␣font-size:␣1.3em;␊
+␣␣border-radius:␣1.5;␊
 }␊
 .c3␣{␊
-␣␣␣␣font-size:␣10.3em;␊
-␣␣␣␣border-radius:␣10.5;␊
+␣␣font-size:␣10.3em;␊
+␣␣border-radius:␣10.5;␊
 }
\ No newline at end of file

```
</details>
</details>