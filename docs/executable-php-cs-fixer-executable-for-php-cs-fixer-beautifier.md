---
id: executable-php-cs-fixer-php-cs-fixer
title: PHP-CS-Fixer Executable for PHP-CS-Fixer Beautifier
sidebar_label: PHP-CS-Fixer Executable
custom_edit_url: https://github.com/Unibeautify/beautifier-php-cs-fixer#readme
---
## Install PHP-CS-Fixer Executable
*PHP-CS-Fixer executable should not be confused with PHP-CS-Fixer beautifier with the same name.*
PHP-CS-Fixer executable is a third-party program you must install manually and is required for beautification.

Below are instructions for each of the supported Operating Systems.
### Windows
[Open the Command Prompt](https://www.lifewire.com/how-to-open-command-prompt-2618089).

<p><iframe width="560" height="315" src="https://www.youtube.com/embed/MBBWVgE0ewk" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></p>


Find the path to PHP-CS-Fixer by running the command:
```batch
where php-cs-fixer
```
Which will return an absolute path like one of the following:
```text
C:\absolute\path\to\php-cs-fixer
C:\absolute\path\to\php-cs-fixer.exe
C:\absolute\path\to\php-cs-fixer.bat
```
Remember this executable path for later.
If `where` fails to return an executable path then you need to fix your `PATH` Environment Variable:

<iframe width="560" height="315" src="https://www.youtube.com/embed/8HK1BsRprt0?start=334" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

Once you successfully an executable path continue to [Usage](#usage) section below.
Replace `/absolute/path/to/php-cs-fixer` with your specific executable path value.
### macOS
![mac-terminal](/img/mac/mac-terminal.png)

<iframe width="560" height="315" src="https://www.youtube.com/embed/zw7Nd67_aFw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


<iframe width="560" height="315" src="https://www.youtube.com/embed/aYVEZTmBiuc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

```bash
which php-cs-fixer
```
### Linux
![linux-terminal](/img/linux/linux-terminal-on-ubuntu.png)
```bash
which php-cs-fixer
```
## Usage
A `.unibeautifyrc.json` file would look like the following:
```json
{
  "LANGUAGE_NAME": {
    "beautifiers": [
      "PHP-CS-Fixer"
    ],
    "PHP-CS-Fixer": {
      "PHP-CS-Fixer": {
        "path": "/absolute/path/to/php-cs-fixer"
      }
    }
  }
}
```
**Note**: The `LANGUAGE_NAME` should be replaced with your desired supported language name, such as `PHP`, etc.