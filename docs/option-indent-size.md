---
id: option-indent-size
title: Indent Size
sidebar_label: ✅ Indent Size
---
**Key**: `indent_size`

**Description**: Indentation size/length

**Type**: `integer`

**Default**: `4`

## Support
**Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [Vue](/docs/language-vue.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

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
| [HTML+ERB](/docs/language-html%2Berb.html) | &#10060; | &#10060; | &#9989; |
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
### CSS
<details><summary><strong>🚧 Original Code</strong></summary>
```CSS
.class1 {
    color: blue;
    background-color: red;
}

.class2 {
    color: red;
    background-color: yellow;
}
.class3 {
    color: yellow;
    background-color: green;
}

.selector-1,
.selector-2 {
    color: green;
    background-color: blue;
}

```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```CSS
.class1 {
color: blue;
background-color: red;
}

.class2 {
color: red;
background-color: yellow;
}
.class3 {
color: yellow;
background-color: green;
}

.selector-1,
.selector-2 {
color: green;
background-color: blue;
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,19 +1,19 @@
 .class1␣{␊
-␣␣␣␣color:␣blue;␊
-␣␣␣␣background-color:␣red;␊
+color:␣blue;␊
+background-color:␣red;␊
 }␊
 ␊
 .class2␣{␊
-␣␣␣␣color:␣red;␊
-␣␣␣␣background-color:␣yellow;␊
+color:␣red;␊
+background-color:␣yellow;␊
 }␊
 .class3␣{␊
-␣␣␣␣color:␣yellow;␊
-␣␣␣␣background-color:␣green;␊
+color:␣yellow;␊
+background-color:␣green;␊
 }␊
 ␊
 .selector-1,␊
 .selector-2␣{␊
-␣␣␣␣color:␣green;␊
-␣␣␣␣background-color:␣blue;␊
+color:␣green;␊
+background-color:␣blue;␊
 }␊

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```CSS
.class1 {
    color: blue;
    background-color: red;
}

.class2 {
    color: red;
    background-color: yellow;
}
.class3 {
    color: yellow;
    background-color: green;
}

.selector-1,
.selector-2 {
    color: green;
    background-color: blue;
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```CSS
.class1 {
        color: blue;
        background-color: red;
}

.class2 {
        color: red;
        background-color: yellow;
}
.class3 {
        color: yellow;
        background-color: green;
}

.selector-1,
.selector-2 {
        color: green;
        background-color: blue;
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "CSS": {
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,19 +1,19 @@
 .class1␣{␊
-␣␣␣␣color:␣blue;␊
-␣␣␣␣background-color:␣red;␊
+␣␣␣␣␣␣␣␣color:␣blue;␊
+␣␣␣␣␣␣␣␣background-color:␣red;␊
 }␊
 ␊
 .class2␣{␊
-␣␣␣␣color:␣red;␊
-␣␣␣␣background-color:␣yellow;␊
+␣␣␣␣␣␣␣␣color:␣red;␊
+␣␣␣␣␣␣␣␣background-color:␣yellow;␊
 }␊
 .class3␣{␊
-␣␣␣␣color:␣yellow;␊
-␣␣␣␣background-color:␣green;␊
+␣␣␣␣␣␣␣␣color:␣yellow;␊
+␣␣␣␣␣␣␣␣background-color:␣green;␊
 }␊
 ␊
 .selector-1,␊
 .selector-2␣{␊
-␣␣␣␣color:␣green;␊
-␣␣␣␣background-color:␣blue;␊
+␣␣␣␣␣␣␣␣color:␣green;␊
+␣␣␣␣␣␣␣␣background-color:␣blue;␊
 }␊

```
</details>
</details>
### HTML
<details><summary><strong>🚧 Original Code</strong></summary>
```HTML
<div>
<span>Hello</span>
<span>World</span>
</div>

```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
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
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,4 +1,4 @@
 <div>␊
 <span>Hello</span>␊
 <span>World</span>␊
-</div>␊
+</div>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
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
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -1,4 +1,4 @@
 <div>␊
-<span>Hello</span>␊
-<span>World</span>␊
-</div>␊
+␣␣␣␣<span>Hello</span>␊
+␣␣␣␣<span>World</span>␊
+</div>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
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
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,4 +1,4 @@
 <div>␊
-<span>Hello</span>␊
-<span>World</span>␊
-</div>␊
+␣␣␣␣␣␣␣␣<span>Hello</span>␊
+␣␣␣␣␣␣␣␣<span>World</span>␊
+</div>
\ No newline at end of file

```
</details>
</details>
### JSON
<details><summary><strong>🚧 Original Code</strong></summary>
```JSON
{
    "key": "value"
}
```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JSON
{
"key": "value"
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JSON": {
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,3 +1,3 @@
 {␊
-␣␣␣␣"key":␣"value"␊
-}
\ No newline at end of file
+"key":␣"value"␊
+}␊

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JSON
{
    "key": "value"
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JSON": {
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -1,3 +1,3 @@
 {␊
 ␣␣␣␣"key":␣"value"␊
-}
\ No newline at end of file
+}␊

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```JSON
{
        "key": "value"
}

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "JSON": {
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,3 +1,3 @@
 {␊
-␣␣␣␣"key":␣"value"␊
-}
\ No newline at end of file
+␣␣␣␣␣␣␣␣"key":␣"value"␊
+}␊

```
</details>
</details>
### Java
<details><summary><strong>🚧 Original Code</strong></summary>
```Java
public class HelloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");
    }

}

```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```Java
public class HelloWorld {
public static void main(String[] args) {
// Prints "Hello, World" to the terminal window.
System.out.println("Hello, World");
}
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Java": {
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,8 +1,6 @@
 public␣class␣HelloWorld␣{␊
-␊
-␣␣␣␣public␣static␣void␣main(String[]␣args)␣{␊
-␣␣␣␣␣␣␣␣//␣Prints␣"Hello,␣World"␣to␣the␣terminal␣window.␊
-␣␣␣␣␣␣␣␣System.out.println("Hello,␣World");␊
-␣␣␣␣}␊
-␊
+public␣static␣void␣main(String[]␣args)␣{␊
+//␣Prints␣"Hello,␣World"␣to␣the␣terminal␣window.␊
+System.out.println("Hello,␣World");␊
 }␊
+}
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```Java
public class HelloWorld {
    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");
    }
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Java": {
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -1,8 +1,6 @@
 public␣class␣HelloWorld␣{␊
-␊
 ␣␣␣␣public␣static␣void␣main(String[]␣args)␣{␊
 ␣␣␣␣␣␣␣␣//␣Prints␣"Hello,␣World"␣to␣the␣terminal␣window.␊
 ␣␣␣␣␣␣␣␣System.out.println("Hello,␣World");␊
 ␣␣␣␣}␊
-␊
-}␊
+}
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
Using [Pretty Diff](/docs/beautifier-pretty-diff.html) beautifier:
```Java
public class HelloWorld {
        public static void main(String[] args) {
                // Prints "Hello, World" to the terminal window.
                System.out.println("Hello, World");
        }
}
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Java": {
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,8 +1,6 @@
 public␣class␣HelloWorld␣{␊
-␊
-␣␣␣␣public␣static␣void␣main(String[]␣args)␣{␊
-␣␣␣␣␣␣␣␣//␣Prints␣"Hello,␣World"␣to␣the␣terminal␣window.␊
-␣␣␣␣␣␣␣␣System.out.println("Hello,␣World");␊
-␣␣␣␣}␊
-␊
-}␊
+␣␣␣␣␣␣␣␣public␣static␣void␣main(String[]␣args)␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣//␣Prints␣"Hello,␣World"␣to␣the␣terminal␣window.␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣System.out.println("Hello,␣World");␊
+␣␣␣␣␣␣␣␣}␊
+}
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
<details><summary><strong>🔧 `0`</strong></summary>
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
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -1,15 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣␣b␣=␣c;␊
+b␣=␣c;␊
 function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+e␣=␣f;␊
 }␊
+}␊
 ␊
 if␣(a)␣{␊
-␣␣b␣=␣c;␊
-␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+b␣=␣c;␊
+function␣foo(d)␣{␊
+e␣=␣f;␊
 }␊
+}␊
 ␊
 foo.bar.baz();␊

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
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
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -1,15 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣␣b␣=␣c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+␣␣␣␣b␣=␣c;␊
+␣␣␣␣function␣foo(d)␣{␊
+␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣}␊
 }␊
 ␊
 if␣(a)␣{␊
-␣␣b␣=␣c;␊
-␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+␣␣␣␣b␣=␣c;␊
+␣␣␣␣function␣foo(d)␣{␊
+␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣}␊
 }␊
 ␊
 foo.bar.baz();␊

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
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
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,15 +1,15 @@
 if␣(a)␣{␊
-␣␣␣␣␣␣b␣=␣c;␊
-function␣foo(d)␣{␊
-␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+␣␣␣␣␣␣␣␣b␣=␣c;␊
+␣␣␣␣␣␣␣␣function␣foo(d)␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣␣␣␣␣}␊
 }␊
 ␊
 if␣(a)␣{␊
-␣␣b␣=␣c;␊
-␣␣function␣foo(d)␣{␊
-␣␣␣␣␣␣e␣=␣f;␊
-␣␣}␊
+␣␣␣␣␣␣␣␣b␣=␣c;␊
+␣␣␣␣␣␣␣␣function␣foo(d)␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣e␣=␣f;␊
+␣␣␣␣␣␣␣␣}␊
 }␊
 ␊
 foo.bar.baz();␊

```
</details>
</details>
### Vue
<details><summary><strong>🚧 Original Code</strong></summary>
```Vue
<template >
  <h1 >{{greeting}}     world</h1 >
  <script>kikoo ( ) </script>
</template >

<script>
module  .  exports  =
{data : function () {return {
	greeting: "Hello"
}}
}
</script>

<style   scoped >
p { font-size : 2em ; text-align : center ; }
  </style >  
```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Vue
<template >
  <h1 >{{greeting}}     world</h1 >
  <script>kikoo ( ) </script>
</template >

<script>
module.exports = {
data: function() {
return {
greeting: "Hello"
};
}
};
</script>

<style   scoped >
p {
font-size: 2em;
text-align: center;
}
</style >

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Vue": {
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified
@@ -3,14 +3,19 @@
 ␣␣<script>kikoo␣(␣)␣</script>␊
 </template␣>␊
 ␊
 <script>␊
-module␣␣.␣␣exports␣␣=␊
-{data␣:␣function␣()␣{return␣{␊
-↹greeting:␣"Hello"␊
-}}␊
+module.exports␣=␣{␊
+data:␣function()␣{␊
+return␣{␊
+greeting:␣"Hello"␊
+};␊
 }␊
\ No newline at end of file
+};␊
 </script>␊
 ␊
 <style␣␣␣scoped␣>␊
-p␣{␣font-size␣:␣2em␣;␣text-align␣:␣center␣;␣}␊
-␣␣</style␣>␣␣
+p␣{␊
+font-size:␣2em;␊
+text-align:␣center;␊
+}␊
+</style␣>␊

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Vue
<template >
  <h1 >{{greeting}}     world</h1 >
  <script>kikoo ( ) </script>
</template >

<script>
module.exports = {
    data: function() {
        return {
            greeting: "Hello"
        };
    }
};
</script>

<style   scoped >
p {
    font-size: 2em;
    text-align: center;
}
</style >

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Vue": {
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -3,14 +3,19 @@
 ␣␣<script>kikoo␣(␣)␣</script>␊
 </template␣>␊
 ␊
 <script>␊
-module␣␣.␣␣exports␣␣=␊
-{data␣:␣function␣()␣{return␣{␊
-↹greeting:␣"Hello"␊
-}}␊
-}␊
+module.exports␣=␣{␊
+␣␣␣␣data:␣function()␣{␊
+␣␣␣␣␣␣␣␣return␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣greeting:␣"Hello"␊
+␣␣␣␣␣␣␣␣};␊
\ No newline at end of file
+␣␣␣␣}␊
+};␊
 </script>␊
 ␊
 <style␣␣␣scoped␣>␊
-p␣{␣font-size␣:␣2em␣;␣text-align␣:␣center␣;␣}␊
-␣␣</style␣>␣␣
+p␣{␊
+␣␣␣␣font-size:␣2em;␊
+␣␣␣␣text-align:␣center;␊
+}␊
+</style␣>␊

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Vue
<template >
  <h1 >{{greeting}}     world</h1 >
  <script>kikoo ( ) </script>
</template >

<script>
module.exports = {
        data: function() {
                return {
                        greeting: "Hello"
                };
        }
};
</script>

<style   scoped >
p {
        font-size: 2em;
        text-align: center;
}
</style >

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Vue": {
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -3,14 +3,19 @@
 ␣␣<script>kikoo␣(␣)␣</script>␊
 </template␣>␊
 ␊
 <script>␊
-module␣␣.␣␣exports␣␣=␊
-{data␣:␣function␣()␣{return␣{␊
-↹greeting:␣"Hello"␊
-}}␊
-}␊
+module.exports␣=␣{␊
+␣␣␣␣␣␣␣␣data:␣function()␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣return␣{␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣greeting:␣"Hello"␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣};␊
\ No newline at end of file
+␣␣␣␣␣␣␣␣}␊
+};␊
 </script>␊
 ␊
 <style␣␣␣scoped␣>␊
-p␣{␣font-size␣:␣2em␣;␣text-align␣:␣center␣;␣}␊
-␣␣</style␣>␣␣
+p␣{␊
+␣␣␣␣␣␣␣␣font-size:␣2em;␊
+␣␣␣␣␣␣␣␣text-align:␣center;␊
+}␊
+</style␣>␊

```
</details>
</details>
### XML
<details><summary><strong>🚧 Original Code</strong></summary>
```XML
<breakfast_menu>
<food>
<name>Belgian Waffles</name>
<price>$5.95</price>
<description>
Two of our famous Belgian Waffles with plenty of real maple syrup
</description>
<calories>650</calories>
</food>
<food>
<name>Strawberry Belgian Waffles</name>
<price>$7.95</price>
<description>
Light Belgian waffles covered with strawberries and whipped cream
</description>
<calories>900</calories>
</food>
<food>
<name>Berry-Berry Belgian Waffles</name>
<price>$8.95</price>
<description>
Light Belgian waffles covered with an assortment of fresh berries and whipped cream
</description>
<calories>900</calories>
</food>
<food>
<name>French Toast</name>
<price>$4.50</price>
<description>
Thick slices made from our homemade sourdough bread
</description>
<calories>600</calories>
</food>
<food>
<name>Homestyle Breakfast</name>
<price>$6.95</price>
<description>
Two eggs, bacon or sausage, toast, and our ever-popular hash browns
</description>
<calories>950</calories>
</food>
</breakfast_menu>
```
</details>
<details><summary><strong>🔧 `0`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```XML
<breakfast_menu>
<food>
<name>Belgian Waffles</name>
<price>$5.95</price>
<description>
Two of our famous Belgian Waffles with plenty of real maple syrup
</description>
<calories>650</calories>
</food>
<food>
<name>Strawberry Belgian Waffles</name>
<price>$7.95</price>
<description>
Light Belgian waffles covered with strawberries and whipped cream
</description>
<calories>900</calories>
</food>
<food>
<name>Berry-Berry Belgian Waffles</name>
<price>$8.95</price>
<description>
Light Belgian waffles covered with an assortment of fresh berries and whipped cream
</description>
<calories>900</calories>
</food>
<food>
<name>French Toast</name>
<price>$4.50</price>
<description>
Thick slices made from our homemade sourdough bread
</description>
<calories>600</calories>
</food>
<food>
<name>Homestyle Breakfast</name>
<price>$6.95</price>
<description>
Two eggs, bacon or sausage, toast, and our ever-popular hash browns
</description>
<calories>950</calories>
</food>
</breakfast_menu>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "XML": {
    "indent_size": 0,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 0
===================================================================
--- 0	Original
+++ 0	Beautified

```
</details>
</details>
<details><summary><strong>🔧 `4`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```XML
<breakfast_menu>
    <food>
        <name>Belgian Waffles</name>
        <price>$5.95</price>
        <description>
            Two of our famous Belgian Waffles with plenty of real maple syrup
        </description>
        <calories>650</calories>
    </food>
    <food>
        <name>Strawberry Belgian Waffles</name>
        <price>$7.95</price>
        <description>
            Light Belgian waffles covered with strawberries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food>
        <name>Berry-Berry Belgian Waffles</name>
        <price>$8.95</price>
        <description>
            Light Belgian waffles covered with an assortment of fresh berries and whipped cream
        </description>
        <calories>900</calories>
    </food>
    <food>
        <name>French Toast</name>
        <price>$4.50</price>
        <description>
            Thick slices made from our homemade sourdough bread
        </description>
        <calories>600</calories>
    </food>
    <food>
        <name>Homestyle Breakfast</name>
        <price>$6.95</price>
        <description>
            Two eggs, bacon or sausage, toast, and our ever-popular hash browns
        </description>
        <calories>950</calories>
    </food>
</breakfast_menu>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "XML": {
    "indent_size": 4,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 4
===================================================================
--- 4	Original
+++ 4	Beautified
@@ -1,42 +1,42 @@
 <breakfast_menu>␊
-<food>␊
-<name>Belgian␣Waffles</name>␊
-<price>$5.95</price>␊
-<description>␊
-Two␣of␣our␣famous␣Belgian␣Waffles␣with␣plenty␣of␣real␣maple␣syrup␊
-</description>␊
-<calories>650</calories>␊
-</food>␊
-<food>␊
-<name>Strawberry␣Belgian␣Waffles</name>␊
-<price>$7.95</price>␊
-<description>␊
-Light␣Belgian␣waffles␣covered␣with␣strawberries␣and␣whipped␣cream␊
-</description>␊
-<calories>900</calories>␊
-</food>␊
-<food>␊
-<name>Berry-Berry␣Belgian␣Waffles</name>␊
-<price>$8.95</price>␊
-<description>␊
-Light␣Belgian␣waffles␣covered␣with␣an␣assortment␣of␣fresh␣berries␣and␣whipped␣cream␊
-</description>␊
-<calories>900</calories>␊
-</food>␊
-<food>␊
-<name>French␣Toast</name>␊
-<price>$4.50</price>␊
-<description>␊
-Thick␣slices␣made␣from␣our␣homemade␣sourdough␣bread␊
-</description>␊
-<calories>600</calories>␊
-</food>␊
-<food>␊
-<name>Homestyle␣Breakfast</name>␊
-<price>$6.95</price>␊
-<description>␊
-Two␣eggs,␣bacon␣or␣sausage,␣toast,␣and␣our␣ever-popular␣hash␣browns␊
-</description>␊
-<calories>950</calories>␊
-</food>␊
+␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣<name>Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣<price>$5.95</price>␊
+␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣Two␣of␣our␣famous␣Belgian␣Waffles␣with␣plenty␣of␣real␣maple␣syrup␊
+␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣<calories>650</calories>␊
+␣␣␣␣</food>␊
+␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣<name>Strawberry␣Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣<price>$7.95</price>␊
+␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣Light␣Belgian␣waffles␣covered␣with␣strawberries␣and␣whipped␣cream␊
+␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣<calories>900</calories>␊
+␣␣␣␣</food>␊
+␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣<name>Berry-Berry␣Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣<price>$8.95</price>␊
+␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣Light␣Belgian␣waffles␣covered␣with␣an␣assortment␣of␣fresh␣berries␣and␣whipped␣cream␊
+␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣<calories>900</calories>␊
+␣␣␣␣</food>␊
+␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣<name>French␣Toast</name>␊
+␣␣␣␣␣␣␣␣<price>$4.50</price>␊
+␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣Thick␣slices␣made␣from␣our␣homemade␣sourdough␣bread␊
+␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣<calories>600</calories>␊
+␣␣␣␣</food>␊
+␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣<name>Homestyle␣Breakfast</name>␊
+␣␣␣␣␣␣␣␣<price>$6.95</price>␊
+␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣Two␣eggs,␣bacon␣or␣sausage,␣toast,␣and␣our␣ever-popular␣hash␣browns␊
+␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣<calories>950</calories>␊
+␣␣␣␣</food>␊
 </breakfast_menu>
\ No newline at end of file

```
</details>
</details>
<details><summary><strong>🔧 `8`</strong></summary>
Using [JS-Beautify](/docs/beautifier-js-beautify.html) beautifier:
```XML
<breakfast_menu>
        <food>
                <name>Belgian Waffles</name>
                <price>$5.95</price>
                <description>
                        Two of our famous Belgian Waffles with plenty of real maple syrup
                </description>
                <calories>650</calories>
        </food>
        <food>
                <name>Strawberry Belgian Waffles</name>
                <price>$7.95</price>
                <description>
                        Light Belgian waffles covered with strawberries and whipped cream
                </description>
                <calories>900</calories>
        </food>
        <food>
                <name>Berry-Berry Belgian Waffles</name>
                <price>$8.95</price>
                <description>
                        Light Belgian waffles covered with an assortment of fresh berries and whipped cream
                </description>
                <calories>900</calories>
        </food>
        <food>
                <name>French Toast</name>
                <price>$4.50</price>
                <description>
                        Thick slices made from our homemade sourdough bread
                </description>
                <calories>600</calories>
        </food>
        <food>
                <name>Homestyle Breakfast</name>
                <price>$6.95</price>
                <description>
                        Two eggs, bacon or sausage, toast, and our ever-popular hash browns
                </description>
                <calories>950</calories>
        </food>
</breakfast_menu>
```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "XML": {
    "indent_size": 8,
    "indent_char": " "
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: 8
===================================================================
--- 8	Original
+++ 8	Beautified
@@ -1,42 +1,42 @@
 <breakfast_menu>␊
-<food>␊
-<name>Belgian␣Waffles</name>␊
-<price>$5.95</price>␊
-<description>␊
-Two␣of␣our␣famous␣Belgian␣Waffles␣with␣plenty␣of␣real␣maple␣syrup␊
-</description>␊
-<calories>650</calories>␊
-</food>␊
-<food>␊
-<name>Strawberry␣Belgian␣Waffles</name>␊
-<price>$7.95</price>␊
-<description>␊
-Light␣Belgian␣waffles␣covered␣with␣strawberries␣and␣whipped␣cream␊
-</description>␊
-<calories>900</calories>␊
-</food>␊
-<food>␊
-<name>Berry-Berry␣Belgian␣Waffles</name>␊
-<price>$8.95</price>␊
-<description>␊
-Light␣Belgian␣waffles␣covered␣with␣an␣assortment␣of␣fresh␣berries␣and␣whipped␣cream␊
-</description>␊
-<calories>900</calories>␊
-</food>␊
-<food>␊
-<name>French␣Toast</name>␊
-<price>$4.50</price>␊
-<description>␊
-Thick␣slices␣made␣from␣our␣homemade␣sourdough␣bread␊
-</description>␊
-<calories>600</calories>␊
-</food>␊
-<food>␊
-<name>Homestyle␣Breakfast</name>␊
-<price>$6.95</price>␊
-<description>␊
-Two␣eggs,␣bacon␣or␣sausage,␣toast,␣and␣our␣ever-popular␣hash␣browns␊
-</description>␊
-<calories>950</calories>␊
-</food>␊
+␣␣␣␣␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<name>Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<price>$5.95</price>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣Two␣of␣our␣famous␣Belgian␣Waffles␣with␣plenty␣of␣real␣maple␣syrup␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<calories>650</calories>␊
+␣␣␣␣␣␣␣␣</food>␊
+␣␣␣␣␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<name>Strawberry␣Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<price>$7.95</price>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣Light␣Belgian␣waffles␣covered␣with␣strawberries␣and␣whipped␣cream␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<calories>900</calories>␊
+␣␣␣␣␣␣␣␣</food>␊
+␣␣␣␣␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<name>Berry-Berry␣Belgian␣Waffles</name>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<price>$8.95</price>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣Light␣Belgian␣waffles␣covered␣with␣an␣assortment␣of␣fresh␣berries␣and␣whipped␣cream␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<calories>900</calories>␊
+␣␣␣␣␣␣␣␣</food>␊
+␣␣␣␣␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<name>French␣Toast</name>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<price>$4.50</price>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣Thick␣slices␣made␣from␣our␣homemade␣sourdough␣bread␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<calories>600</calories>␊
+␣␣␣␣␣␣␣␣</food>␊
+␣␣␣␣␣␣␣␣<food>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<name>Homestyle␣Breakfast</name>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<price>$6.95</price>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣Two␣eggs,␣bacon␣or␣sausage,␣toast,␣and␣our␣ever-popular␣hash␣browns␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣</description>␊
+␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣␣<calories>950</calories>␊
+␣␣␣␣␣␣␣␣</food>␊
 </breakfast_menu>
\ No newline at end of file

```
</details>
</details>