---
id: cli
title: Command-Line Interface (CLI)
description: Install Unibeautify's command-line interface (CLI) to format code for many languages
---

First install the [Unibeautify](https://www.npmjs.com/package/unibeautify) dependency.

```bash
# Globally
npm install --global unibeautify
```

Install [Unibeautify's CLI](https://github.com/Unibeautify/unibeautify-cli):

```bash
# Locally
npm install --save-dev @unibeautify/cli
# Or globally
npm install --global @unibeautify/cli
```

And then install your beautifiers along with any prerequisites and [`peerDependencies`](https://docs.npmjs.com/files/package.json#peerdependencies).

```bash
# Locally
npm install --save-dev @unibeautify/beautifier-CHANGEME
# Or globally
npm install --global @unibeautify/beautifier-CHANGEME
```

For example, locally installing [`beautifier-prettier`](https://yarnpkg.com/en/package/@unibeautify/beautifier-prettier):

```bash
npm install --save-dev @unibeautify/beautifier-prettier
```

And [`prettier`](https://yarnpkg.com/en/package/prettier) is a peer dependency:

```bash
npm install --save-dev prettier --exact
```

See [`unibeautify-cli` repository](https://github.com/Unibeautify/unibeautify-cli) for more information. [Click here for a list of published beautifiers.](https://classic.yarnpkg.com/en/packages?q=beautifier-&p=1&keywords%5B0%5D=unibeautify)

<script type="application/ld+json">
{
  "@context": "http://schema.org",
  "@type": "HowTo",
  "name": "How to install Unibeautify CLI",
  "description": "How to install Unibeautify command-line interface",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "USD",
    "value": "0"
  },
  "supply": [],
  "tool": [
    {
      "@type": "HowToTool",
      "name": "Node.js & npm"
    },
    {
      "@type": "HowToTool",
      "name": "Terminal / shell"
    },
    {
      "@type": "HowToTool",
      "name": "Unibeautify package"
    },
    {
      "@type": "HowToTool",
      "name": "Unibeautify CLI package"
    }
  ],
  "step": [
    {
      "@type": "HowToStep",
      "url": "https://nodejs.org/en/download/",
      "name": "Install Node.js and npm",
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": "Download and install <a href=\"https://nodejs.org/en/download/\">Node.js and npm</a>: https://github.com/Unibeautify/unibeautify-cli"
        }
      ]
    },
    {
      "@type": "HowToStep",
      "url": "https://github.com/Unibeautify/unibeautify-cli",
      "name": "Install Unibeautify Command-Line Interface (CLI) package",
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": "Install <a href=\"https://github.com/Unibeautify/unibeautify-cli\">Unibeautify CLI</a> using <a href=\"https://nodejs.org/en/knowledge/getting-started/npm/what-is-npm/\">npm</a> by running the following in your Terminal shell:"
        },
        {
          "@type": "HowToDirection",
          "text": "Locally: npm install --save-dev unibeautify-cli"
        },
        {
          "@type": "HowToDirection",
          "text": "Globally: npm install --global unibeautify-cli"
        }
      ]
    }, {
      "@type": "HowToStep",
      "name": "Install beautifiers supporting your languages",
      "url": "https://unibeautify.com/docs/languages",
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": "Unibeautify supports many beautifiers. Check out the list of supported languages and their respective beautifiers: https://unibeautify.com/docs/languages"
        },
        {
          "@type": "HowToDirection",
          "text": "Locally: npm install --save-dev beautifier-CHANGEME"
        },
        {
          "@type": "HowToDirection",
          "text": "Globally: npm install --global beautifier-CHANGEME"
        },
        {
          "@type": "HowToDirection",
          "text": "Also install any prerequisites and peer dependencies listed for the beautifier. Learn more about peer dependencies at https://docs.npmjs.com/files/package.json#peerdependencies"
        },
        {
          "@type": "HowToTip",
          "text": "For example, to install Prettier beautifier (https://unbeautify.com/docs/beautifier-prettier) locally run the following command in your Terminal shell: npm install --save-dev unibeautify prettier @unibeautify/beautifier-prettier"
        },
        {
          "@type": "HowToTip",
          "text": "Check out the list of published beautifiers here: https://classic.yarnpkg.com/en/packages?q=beautifier-&p=1&keywords%5B0%5D=unibeautify"
        }
      ]
    }, {
      "@type": "HowToStep",
      "name": "Create Unibeautify configuration file",
      "url": "https://unibeautify.com/docs/config-file",
      "itemListElement": [
        {
          "@type": "HowToDirection",
          "text": "Go to https://unibeautify.com/docs/config-file"
        }
      ]
    }
  ],
  "totalTime": "P60S"
}
</script>
