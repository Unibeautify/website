---
id: config-file
title: Configuration File
---

Unibeautify uses [cosmiconfig](https://github.com/davidtheclark/cosmiconfig) for configuration file support.
This means you can configure Unibeautify via:

- A `.unibeautifyrc` file, written in YAML or JSON, with optional extensions: `.yaml/.yml/.json/.js`.
- A `unibeautify.config.js` file that exports an object.
- A `"unibeautify"` key in your `package.json` file.

The [options](options-for-languages.md) to the configuration file are grouped by the respective language.

## Using the Assistant

Use the [Unibeautify assistant](https://assistant.unibeautify.com/#/setup) for an interactive setup of your configuration file. Simply select the languages you want, and it will walk you though the options available. At the end simply download or copy to your clipboard your configuration.

## Where to put the configuration file

Whether you create the configuration file content with the Assistant or otherwise, you would next place the configuration [where Unibeautify would expect to find it](/docs/options-for-beautifiers#config-file-path).

## Example

Both YAML and JSON formats are supported. You can use [json2yaml.com](https://www.json2yaml.com/) to convert from one to the other.

### YAML

`.unibeautifyrc.yml`:

```yaml
---
PHP: # Language
  beautifiers: # Enable beautifiers
  - PHP-CS-Fixer
  PHP-CS-Fixer: # Beautifier options
    prefer_beautifier_config: true
    PHP-CS-Fixer: # Executable options
      path: "/absolute/path/to/php-cs-fixer"
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

### JSON

`.unibeautifyrc.json`:

```json
{
  "PHP": {
    "beautifiers": [
      "PHP-CS-Fixer"
    ],
    "PHP-CS-Fixer": {
      "prefer_beautifier_config": true,
      "PHP-CS-Fixer": {
        "path": "/absolute/path/to/php-cs-fixer"
      }
    }
  },
  "TypeScript": {
    "beautifiers": [
      "Pretty Diff",
      "Prettier"
    ],
    "align_assignments": false,
    "arrow_parens": "as-needed",
    "break_chained_methods": true,
    "end_with_comma": true,
    "end_with_semicolon": true,
    "indent_char": " ",
    "indent_size": 2,
    "jsx_brackets": false,
    "multiline_ternary": true,
    "object_curly_spacing": true,
    "quotes": "double",
    "space_after_anon_function": false,
    "wrap_line_length": 80
  },
  "CSS": {
    "indent_char": " ",
    "indent_size": 2
  },
  "HTML": {
    "indent_char": " ",
    "indent_size": 2
  }
}
```
