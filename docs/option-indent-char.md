---
id: option-indent-char
title: Indent Char
---
**Key**: `indent_char`

**Description**: Indentation character

**Type**: `string`

**Default**: `" "`

**Allowed values**: `" "` or `"\t"`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### HTML
```HTML
<div>
<span>Hello</span>
<span>World</span>
</div>

```
### JavaScript
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
## `" "`
### HTML
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
### JavaScript
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
## `"\t"`
### HTML
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
### JavaScript
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