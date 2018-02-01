---
id: option-indent-with-tabs
title: Indent With Tabs
sidebar_label: ✅ Indent With Tabs
---
**Key**: `indent_with_tabs`

**Description**: Indentation uses tabs, overrides `Indent Size` and `Indent Char`

**Type**: `boolean`

**Default**: `true`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

| Language | [Prettier](/docs/beautifier-prettier.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; | &#9989; |
| [CSV](/docs/language-csv.html) | &#10060; | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#9989; |
| [EJS](/docs/language-ejs.html) | &#10060; | &#9989; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; |
| [HTML+ERB](/docs/language-html%2Berb.html) | &#10060; | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#9989; |
| [Riot](/docs/language-riot.html) | &#10060; | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#9989; |
| [SVG](/docs/language-svg.html) | &#10060; | &#9989; |
| [Sass](/docs/language-sass.html) | &#10060; | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#9989; |
| [Swig](/docs/language-swig.html) | &#10060; | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#9989; |
| [Twig](/docs/language-twig.html) | &#10060; | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#9989; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#9989; |
## Examples
### JavaScript
#### 🚧 Original Code
```JavaScript
if (a) {
     b=c;
function foo(d) {
           e=f;
 }
}

if (a) {
  b=c;
  function foo(d) {
    e=f;
  }
}

foo
.bar
.baz()
```
#### 🔧 `true`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
if (a) {
	b = c;
	function foo(d) {
		e = f;
	}
}

if (a) {
	b = c;
	function foo(d) {
		e = f;
	}
}

foo.bar.baz();

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_with_tabs": true
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
@@ -1,17 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣b=c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣␣e=f;␊
-␣}␊
+↹b␣=␣c;␊
+↹function␣foo(d)␣{␊
+↹↹e␣=␣f;␊
+↹}␊
 }␊
 ␊
 if␣(a)␣{␊
-␣␣b=c;␊
-␣␣function␣foo(d)␣{␊
-␣␣␣␣e=f;␊
-␣␣}␊
+↹b␣=␣c;␊
\ No newline at end of file
+↹function␣foo(d)␣{␊
+↹↹e␣=␣f;␊
+↹}␊
 }␊
 ␊
-foo␊
-.bar␊
-.baz()
+foo.bar.baz();␊

```
</details>
#### 🔧 `false`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JavaScript
if (a) {
  b = c;
  function foo(d) {
    e = f;
  }
}

if (a) {
  b = c;
  function foo(d) {
    e = f;
  }
}

foo.bar.baz();

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JavaScript": {
    "indent_size": 2,
    "indent_char": " ",
    "indent_with_tabs": false
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
@@ -1,17 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣b=c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣␣e=f;␊
-␣}␊
+␣␣b␣=␣c;␊
+␣␣function␣foo(d)␣{␊
+␣␣␣␣e␣=␣f;␊
+␣␣}␊
 }␊
 ␊
 if␣(a)␣{␊
-␣␣b=c;␊
+␣␣b␣=␣c;␊
 ␣␣function␣foo(d)␣{␊
-␣␣␣␣e=f;␊
+␣␣␣␣e␣=␣f;␊
\ No newline at end of file
 ␣␣}␊
 }␊
 ␊
-foo␊
-.bar␊
-.baz()
+foo.bar.baz();␊

```
</details>