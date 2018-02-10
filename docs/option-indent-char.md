---
id: option-indent-char
title: Indent Char
sidebar_label: ✅ Indent Char
---
**Key**: `indent_char`

**Description**: Indentation character

**Type**: `string`

**Default**: `" "`

**Allowed values**: `" "` or `"\t"`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html-erb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [Vue](/docs/language-vue.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

<details><summary><strong>Comparison Table</strong></summary>
| Language | [Prettier](/docs/beautifier-prettier.html) | [JS-Beautify](/docs/beautifier-js-beautify.html) | [Pretty Diff](/docs/beautifier-pretty-diff.html) |
| --- | --- | --- | --- |
| [C#](/docs/language-csharp.html) | &#10060; | &#10060; | &#9989; |
| [CSS](/docs/language-css.html) | &#9989; | &#9989; | &#9989; |
| [CSV](/docs/language-csv.html) | &#10060; | &#10060; | &#9989; |
| [ColdFusion](/docs/language-coldfusion.html) | &#10060; | &#10060; | &#9989; |
| [EJS](/docs/language-ejs.html) | &#10060; | &#9989; | &#9989; |
| [GraphQL](/docs/language-graphql.html) | &#9989; | &#10060; | &#10060; |
| [HTML](/docs/language-html.html) | &#10060; | &#9989; | &#9989; |
| [HTML+ERB](/docs/language-html-erb.html) | &#10060; | &#10060; | &#9989; |
| [Handlebars](/docs/language-handlebars.html) | &#10060; | &#9989; | &#9989; |
| [JSON](/docs/language-json.html) | &#9989; | &#9989; | &#9989; |
| [JSX](/docs/language-jsx.html) | &#9989; | &#9989; | &#9989; |
| [Java](/docs/language-java.html) | &#10060; | &#10060; | &#9989; |
| [JavaScript](/docs/language-javascript.html) | &#9989; | &#9989; | &#9989; |
| [Less](/docs/language-less.html) | &#9989; | &#10060; | &#9989; |
| [Liquid](/docs/language-liquid.html) | &#10060; | &#9989; | &#10060; |
| [Mustache](/docs/language-mustache.html) | &#10060; | &#9989; | &#10060; |
| [Riot](/docs/language-riot.html) | &#10060; | &#10060; | &#9989; |
| [SCSS](/docs/language-scss.html) | &#9989; | &#10060; | &#9989; |
| [SVG](/docs/language-svg.html) | &#10060; | &#10060; | &#9989; |
| [Sass](/docs/language-sass.html) | &#10060; | &#10060; | &#9989; |
| [Spacebars](/docs/language-spacebars.html) | &#10060; | &#10060; | &#9989; |
| [Swig](/docs/language-swig.html) | &#10060; | &#10060; | &#9989; |
| [Titanium Style Sheets](/docs/language-titanium-style-sheets.html) | &#10060; | &#10060; | &#9989; |
| [Twig](/docs/language-twig.html) | &#10060; | &#10060; | &#9989; |
| [TypeScript](/docs/language-typescript.html) | &#9989; | &#10060; | &#9989; |
| [Visualforce](/docs/language-visualforce.html) | &#10060; | &#10060; | &#9989; |
| [Vue](/docs/language-vue.html) | &#9989; | &#10060; | &#10060; |
| [XML](/docs/language-xml.html) | &#10060; | &#9989; | &#9989; |
| [XTemplate](/docs/language-xtemplate.html) | &#10060; | &#10060; | &#9989; |
</details>
## Examples
### HTML
<details><summary><strong>🚧 Original Code</strong></summary>
```HTML
<div>
<span>Hello</span>
<span>World</span>
</div>

```
</details>
<details><summary><strong>🔧 `" "`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
  <span>Hello</span>
  <span>World</span>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index:  
===================================================================
---  	Original
+++  	Beautified
@@ -1,4 +1,4 @@
 <div>␊
-<span>Hello</span>␊
-<span>World</span>␊
-</div>␊
+␣␣<span>Hello</span>␊
+␣␣<span>World</span>␊
+</div>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `"\t"`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```HTML
<div>
		<span>Hello</span>
		<span>World</span>
</div>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "HTML": {
    "indent_size": 2,
    "indent_char": "\t"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 	
===================================================================
--- 		Original
+++ 		Beautified
@@ -1,4 +1,4 @@
 <div>␊
-<span>Hello</span>␊
-<span>World</span>␊
-</div>␊
+↹↹<span>Hello</span>␊
+↹↹<span>World</span>␊
+</div>
\ No newline at end of file

```
</details>
</details>
### JavaScript
<details><summary><strong>🚧 Original Code</strong></summary>
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
</details>
<details><summary><strong>🔧 `" "`</strong></summary>
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
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index:  
===================================================================
---  	Original
+++  	Beautified
@@ -1,15 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣␣b␣=␣c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣b␣=␣c;␊
+␣␣function␣foo(d)␣{␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
 ␊
 if␣(a)␣{␊
 ␣␣b␣=␣c;␊
 ␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣e␣=␣f;␊
 ␣␣}␊
 }␊
 ␊
 foo.bar.baz();␊

```
</details>
</details>
<details><summary><strong>🔧 `"\t"`</strong></summary>
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
    "indent_char": "\t"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 	
===================================================================
--- 		Original
+++ 		Beautified
@@ -1,15 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣␣b␣=␣c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+↹b␣=␣c;␊
+↹function␣foo(d)␣{␊
+↹↹e␣=␣f;␊
+↹}␊
 }␊
 ␊
 if␣(a)␣{␊
-␣␣b␣=␣c;␊
-␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+↹b␣=␣c;␊
+↹function␣foo(d)␣{␊
+↹↹e␣=␣f;␊
+↹}␊
 }␊
 ␊
 foo.bar.baz();␊

```
</details>
</details>