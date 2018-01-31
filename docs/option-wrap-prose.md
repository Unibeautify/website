---
id: option-wrap-prose
title: Wrap Prose
sidebar_label: Wrap Prose (✅)
---
**Key**: `wrap_prose`

**Description**: Wrap markdown text to new lines

**Type**: `string`

**Default**: `"preserve"`

**Allowed values**: `"always"` or `"never"` or `"preserve"`

**Supported Languages**: [Markdown](/docs/language-markdown.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Markdown
### Original Code
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.


```
### `"always"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown
text to new lines. Wrap markdown text to new lines. Wrap markdown text to new
lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap
markdown text to new lines.

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Markdown": {
    "indent_size": 2,
    "indent_char": " ",
    "wrap_prose": "always"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: always
===================================================================
--- always	Original
+++ always	Beautified
@@ -1,4 +1,6 @@
 #␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
 ␊
-Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
-␊
+Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␊
+text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␊
+lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␊
+markdown␣text␣to␣new␣lines.␊

```
</details>
### `"never"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Markdown": {
    "indent_size": 2,
    "indent_char": " ",
    "wrap_prose": "never"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: never
===================================================================
--- never	Original
+++ never	Beautified
@@ -1,4 +1,3 @@
 #␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
 ␊
 Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
-␊

```
</details>
### `"preserve"`
Using [Prettier](/docs/beautifier-prettier.html) beautifier:
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

```
<details><summary>Configuration</summary>
A `.unibeautify.json` file would look like the following:
```json
{
  "Markdown": {
    "indent_size": 2,
    "indent_char": " ",
    "wrap_prose": "preserve"
  }
}
```
</details>
<details><summary>Difference from original</summary>
```diff
Index: preserve
===================================================================
--- preserve	Original
+++ preserve	Beautified
@@ -1,4 +1,3 @@
 #␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
 ␊
 Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␣Wrap␣markdown␣text␣to␣new␣lines.␊
-␊

```
</details>