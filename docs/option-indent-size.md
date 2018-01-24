---
id: option-indent-size
title: Indent Size
---
**Key**: `indent_size`

**Description**: Indentation size/length

**Type**: `integer`

**Default**: `4`

**Supported Languages**: [C#](/docs/language-csharp.html), [CSS](/docs/language-css.html), [CSV](/docs/language-csv.html), [EJS](/docs/language-ejs.html), [GraphQL](/docs/language-graphql.html), [HTML](/docs/language-html.html), [Handlebars](/docs/language-handlebars.html), [JSON](/docs/language-json.html), [JSX](/docs/language-jsx.html), [Java](/docs/language-java.html), [JavaScript](/docs/language-javascript.html), [Less](/docs/language-less.html), [Markdown](/docs/language-markdown.html), [SCSS](/docs/language-scss.html), [SVG](/docs/language-svg.html), [Sass](/docs/language-sass.html), [Spacebars](/docs/language-spacebars.html), [Swig](/docs/language-swig.html), [Twig](/docs/language-twig.html), [TypeScript](/docs/language-typescript.html), [Visualforce](/docs/language-visualforce.html), [XML](/docs/language-xml.html), [XTemplate](/docs/language-xtemplate.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html), [Pretty Diff](/docs/beautifier-pretty-diff.html)

# Examples
## Original Code
### JavaScript
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
## `4`
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