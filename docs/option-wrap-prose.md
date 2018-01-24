---
id: option-wrap-prose
title: Wrap Prose
---
**Key**: `wrap_prose`

**Description**: Wrap markdown text to new lines

**Type**: `string`

**Default**: `"preserve"`

**Allowed values**: `"always"` or `"never"` or `"preserve"`

**Supported Languages**: [Markdown](/docs/language-markdown.html)

**Supported Beautifiers**: [Prettier](/docs/beautifier-prettier.html)

# Examples
## Original Code
### Markdown
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.


```
## `"always"`
### Markdown
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown
text to new lines. Wrap markdown text to new lines. Wrap markdown text to new
lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap
markdown text to new lines.

```
## `"never"`
### Markdown
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

```
## `"preserve"`
### Markdown
```Markdown
# Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines. Wrap markdown text to new lines.

```