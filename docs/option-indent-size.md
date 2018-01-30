---
id: option-indent-size
title: Indent Size
---
**Key**: `indent_size`

**Description**: Indentation size/length

**Type**: `integer`

**Default**: `4`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [ColdFusion](/docs/language-coldfusion.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [HTML+ERB](/docs/language-html%2Berb.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Liquid](/docs/language-liquid.html), [Mustache](/docs/language-mustache.html), [Riot](/docs/language-riot.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Titanium Style Sheets](/docs/language-titanium-style-sheets.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [JS-Beautify](/docs/beautifier-js-beautify.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### CSS
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
### XML
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
## `4`
### CSS
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
### XML
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