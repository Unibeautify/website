---
id: options-for-beautifiers
title: Beautifier Options
---

## Example Configuration

Template `.unibeautifyrc.yml`:

```yaml
---
LANGUAGE_NAME: # Language
  BEAUTIFIER_NAME: # <------------------------ Beautifier options start here
    prefer_beautifier_config: true
    EXECUTABLE_NAME: # Executable options
      path: "/absolute/path/to/executable"
```

For example, consider the [PHP-CS-Fixer beautifier](/docs/beautifier-php-cs-fixer.html):

```yaml
---
PHP: # Language
  beautifiers: # Enable beautifiers
  - PHP-CS-Fixer
  PHP-CS-Fixer: # <------------------------ Beautifier options start here
    prefer_beautifier_config: true
    PHP-CS-Fixer: # Executable options
      path: "/absolute/path/to/php-cs-fixer"
```

## Prefer Beautifier Configuration

After enabling `prefer_beautifier_config` option for a beautifier Unibeautify will attempt to find the beautifier's configuration file.
If the beautifier's configuration file is found then Unibeautify's own configuration file (e.g. `.unibeautifyrc`) will be ignored.
This is useful when Unibeautify does not support an option and you want more control over a specific beautifier.

> Only certain beautifiers support the `prefer_beautifier_config` option. See the `Advanced` section on a beautifier's page to see what beautifier options are supported. For example, see the [PHP-CS-Fixer beautifier](/docs/beautifier-php-cs-fixer.html#advanced).

### Config File Path
You can also specify the absolute path to the beautifier's config file by putting a string in the `prefer_beautifier_config` option. It will otherwise look in the directory of the file being beautified, and if it doesn't find it there, will go to the parent directory.

```yaml
---
PHP: # Language
  beautifiers: # Enable beautifiers
  - PHP-CS-Fixer
  PHP-CS-Fixer: # <------------------------ Beautifier options start here
    prefer_beautifier_config: "path/to/beautifier/config/file"
    PHP-CS-Fixer: # Executable options
      path: "/absolute/path/to/php-cs-fixer"
```