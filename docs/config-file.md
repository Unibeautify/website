---
id: config-file
title: Configuration File
---

Unibeautify uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support.
This means you can configure Unibeautify via:

- A `.unibeautifyrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json/.js`.
- A `unibeautify.config.js` file that exports an object.
- A `"unibeautify"` key in your `package.json` file.

The [options](options.md) to the configuration file are grouped by the respective language.

## Example

### YAML

`.unibeautifyrc.yml`:

```yaml
---
TypeScript:
  beautifiers: ["Pretty Diff", "Prettier"]
  align_assignments: false
  arrow_parens: "as-needed"
  break_chained_methods: true
  end_with_comma: true
  end_with_semicolon: true
  indent_char: " "
  indent_size: 2
  jsx_brackets: false
  multiline_ternary: true
  object_curly_spacing: true
  quotes: "double"
  space_after_anon_function: false
  wrap_line_length: 80
CSS:
  indent_char: " "
  indent_size: 2
HTML:
  indent_char: " "
  indent_size: 2
```
