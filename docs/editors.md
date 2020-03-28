---
id: editors
title: Editor Integration
description: Unibeautify formats code with Atom and Visual Studio Code (VSCode) editors.
---

## Atom

### What is Atom?

[**A hackable text editor for the 21st Century by GitHub.**](https://atom.io/)

### How to format code in Atom?

| Before | After |
| --- | ---- |
| Original HTML | Beautified HTML |
| ![image](https://cloud.githubusercontent.com/assets/1885333/16542727/db52adc6-408a-11e6-824e-04aed06bd2f7.png) | ![image](https://cloud.githubusercontent.com/assets/1885333/16542728/dcac3700-408a-11e6-8e35-9c8fc4432edc.png) |

See https://github.com/Glavin001/atom-beautify for installation instructions.

> Atom-Beautify does not yet use Unibeautify.
> Subscribe to https://github.com/Glavin001/atom-beautify/issues/1174 for updates on Atom-Beautify supporting Unibeautify.
> Until the migration to using Unibeautify is complete please use Atom-Beautify's own documentation found at https://github.com/Glavin001/atom-beautify/blob/master/docs/options.md

Open the [Command Palette](https://github.com/atom/command-palette), type `Beautify`, and run `Beautify Editor`.

![image](https://cloud.githubusercontent.com/assets/1885333/16542583/1c8d975c-4085-11e6-8307-e35df7430a10.png)

### How to format on save in Atom?

In [Atom-Beautify](https://github.com/Glavin001/atom-beautify), format/beautify on save can be enabled or disabled for each language individually.

For example, for language [HTML](/docs/language-html) go into Atom-Beautify's package settings (`Atom` ➔ `Preferences` ➔ `Search` for atom-beautify), find [HTML](/docs/language-html), and toggle the <kbd>Beautify On Save</kbd> option.

![atom-beautify-setup-beautify-on-save](https://cloud.githubusercontent.com/assets/1885333/16542692/3e781e74-4089-11e6-9cf2-5a19af161093.gif)

### What is the keyboard shortcut in Atom?

You can also type <kbd>Ctrl-Alt-B</kbd> as a shortcut or click `Packages > Beautify` in the menu.

See [Keymaps In-Depth](https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth/) for more details on how to customize.

```coffeescript
'.editor':
  'ctrl-alt-b': 'atom-beautify:beautify-editor'
```

## Emacs

### What is Emacs?

[**An extensible, customizable, free/libre text editor — and more.**](https://www.gnu.org/software/emacs/)

### How to format code in Emacs?

Emacs is not yet supported. Please help us by contributing! Thanks in advance!

See https://github.com/Unibeautify/emacs to contribute.

## Sublime Text

### What is Sublime Text?

[**A sophisticated text editor for code, markup and prose.**](https://www.sublimetext.com/)

### How to format code in Sublime Text?

Sublime Text plugin is not yet implemented. Please help us by contributing! Thanks in advance!

See https://github.com/Unibeautify/unibeautify-sublime to contribute.

## Vim

### What is Vim?

[**The ubiquitous text editor.**](https://www.vim.org/)

### How to format code in Vim?

Vim is not yet supported. Please help us by contributing! Thanks in advance!

## Visual Studio

### What is Visual Studio?

[**Best-in-class tools for any developer.**](https://visualstudio.microsoft.com/)

### How to format code in Visual Studio?

Visual Studio extension is not yet implemented. Please help us by contributing! Thanks in advance!

## Visual Studio Code

### What is Visual Studio Code?

[**Code editing. Redefined.**](https://code.visualstudio.com/)

### How to format code in Visual Studio Code?

![Unibeautify Visual Studio Code Format Demo](https://user-images.githubusercontent.com/1885333/37237670-0f06fcde-23ed-11e8-9200-4d2089323fe1.gif)

See https://github.com/Unibeautify/vscode for installation instructions.

Open the Command Palette (<kbd>Ctrl + Shift + P</kbd> on Windows or <kbd>Command + Shift + P</kbd> on Mac) and search for format:

- <kbd>Format Document</kbd> - Formats the entire editor document.
- <kbd>Format Selection</kbd> - Formats only the selection. Only appears when text selected.

![unibeautify-format-command-palette](https://user-images.githubusercontent.com/1885333/37503575-f6c0092a-28b7-11e8-9bf6-6573d3eab76c.png)

### How to format on save in Visual Studio Code?

You can turn on format on save for all languages with the [VSCode setting](https://code.visualstudio.com/docs/getstarted/settings):

```javascript
"editor.formatOnSave": false,
```

Or enable only for specific langauges:

```javascript
"editor.formatOnSave": false,
"[javascript]": {
    "editor.formatOnSave": true
}
```

See https://code.visualstudio.com/updates/v1_6#_format-on-save for more details.

### What is the keyboard shortcut in Visual Studio Code?

- Windows: <kbd>Shift + Alt + F</kbd>
- Mac: <kbd>Shift + Option + F</kbd>
- Ubuntu: <kbd>Ctrl + Shift + I</kbd>

## WebStorm

### What is WebStorm?

[**The smartest JavaScript IDE.**](https://www.jetbrains.com/webstorm/)

### How to format code in WebStorm?

WebStorm is not yet supported. Please help us by contributing! Thanks in advance!

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "name": "Editor Integration FAQ",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How to format code in Atom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<a href=\"https://atom.io/\">Download and install Atom editor</a>. Install <a href=\"https://atom.io/packages/atom-beautify\">Atom Package</a> by running <strong>apm install atom-beautify</strong> in your Terminal shell or in Atom editor go to <strong>Settings/Preferences ➔ Install ➔ Search for atom-beautify</strong>. Open the <a href=\"https://github.com/atom/command-palette\">Command Palette</a>, type <strong>Beautify</strong>, and run <strong>Beautify Editor</strong>."
      }
    }, {
      "@type": "Question",
      "name": "How to format on save in Atom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "In <a href=\"https://github.com/Glavin001/atom-beautify\">Atom-Beautify</a>, format/beautify on save can be enabled or disabled for each language individually. For example, for language <a href=\"https://unibeautify.com/docs/language-html.html\">HTML</a> go into Atom-Beautify's package settings (<strong>Atom ➔ Preferences ➔ Search for atom-beautify</strong>), find <a href=\"https://unibeautify.com/docs/language-html.html\">HTML</a>, and toggle the <strong>Beautify On Save</strong> option."
      }
    }, {
      "@type": "Question",
      "name": "What is the keyboard shortcut in Atom?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can also type <strong>Ctrl-Alt-B</strong> as a shortcut or click <strong>Packages > Beautify</strong> in the menu.<br/>See <a href=\"https://flight-manual.atom.io/behind-atom/sections/keymaps-in-depth/\">Keymaps In-Depth</a> for more details on how to customize."
      }
    },
    {
      "@type": "Question",
      "name": "How to format code in Visual Studio Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Install <a href=\"https://marketplace.visualstudio.com/items?itemName=Glavin001.unibeautify-vscode\">Unibeautify extension for VSCode</a>. Open the <a href=\"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette\">Command Palette</a> (<strong>Ctrl + Shift + P</strong> on Windows or <strong>Command + Shift + P</strong> on Mac) and search for your desired format action:<br/><ul><li><strong>Format Document</strong> - Formats the entire editor document.</li><li><strong>Format Selection</strong> - Formats only the selection. Only appears when text selected.</li></ul><br/>See <a href=\"https://code.visualstudio.com/docs/editor/codebasics#_formatting\">VSCode documentation</a> for more details."
      }
    },
    {
      "@type": "Question",
      "name": "How to format on save in Visual Studio Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can turn on format on save for all languages with the <a href=\"https://code.visualstudio.com/docs/getstarted/settings\">VSCode setting</a>:<br/><strong>\"editor.formatOnSave\": false,</strong><br/>Or enable only for specific langauges:<br/><strong>\"editor.formatOnSave\": false, \"[javascript]\": { \"editor.formatOnSave\": true }</strong><br/>See <a href=\"https://code.visualstudio.com/updates/v1_6#_format-on-save\">VSCode's format-on-save documentation</a> for more details."
      }
    },
    {
      "@type": "Question",
      "name": "What is the keyboard shortcut in Visual Studio Code?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "<ul><li>Windows: <em>Shift + Alt + F</em></li><li>Mac: <em>Shift + Option + F</em></li><li>Ubuntu: <em>Ctrl + Shift + I</em></li></ul>"
      }
    }
  ]
}
</script>
