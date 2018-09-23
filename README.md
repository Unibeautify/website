# Unibeautify Website

## Supported Beautifiers

See https://github.com/Unibeautify/website/blob/master/scripts/beautifiers.ts for list of supported beautifiers. Beautifiers marked with :warning: require additional manual installation.

<!--START:SUPPORT-TABLE-->
| # | Beautifier | Preinstalled | Documentation |
| --- | --- | --- | --- |
| 1 | Black | :warning: | https://unibeautify.com/docs/beautifier-black.html |
| 2 | CSScomb | :white_check_mark: | https://unibeautify.com/docs/beautifier-csscomb.html |
| 3 | ClangFormat | :warning: | https://unibeautify.com/docs/beautifier-clangformat.html |
| 4 | ESLint | :white_check_mark: | https://unibeautify.com/docs/beautifier-eslint.html |
| 5 | Gofmt | :warning: | https://unibeautify.com/docs/beautifier-gofmt.html |
| 6 | JS-Beautify | :white_check_mark: | https://unibeautify.com/docs/beautifier-js-beautify.html |
| 7 | PHP-CS-Fixer | :warning: | https://unibeautify.com/docs/beautifier-php-cs-fixer.html |
| 8 | PHP_CodeSniffer | :warning: | https://unibeautify.com/docs/beautifier-php_codesniffer.html |
| 9 | Prettier | :white_check_mark: | https://unibeautify.com/docs/beautifier-prettier.html |
| 10 | Pretty Diff | :white_check_mark: | https://unibeautify.com/docs/beautifier-pretty-diff.html |
| 11 | TSLint | :white_check_mark: | https://unibeautify.com/docs/beautifier-tslint.html |
| 12 | YAPF | :warning: | https://unibeautify.com/docs/beautifier-yapf.html |
| 13 | sqlformat | :warning: | https://unibeautify.com/docs/beautifier-sqlformat.html |
<!--END:SUPPORT-TABLE-->

## Contributing

Install dependencies:

```
# For scripts
yarn install

# For Docusaurus
cd website
yarn install
```

See the documentation of any supported beautifier above marked with :warning: and install their prerequisites.

Generate the docs for options, languages, and beautifiers:

```
yarn docs
```

We use [Docusaurus](https://docusaurus.io/) to build the website:

```
cd website
yarn start
# navigate to http://localhost:3000
```

## Testing Netlify with Docker

The website is deployed using [Netlify](https://www.netlify.com/).
You can edit the Netlify build command in `scripts/netlify.sh`
and then test by building [Netlify's Docker image](https://github.com/netlify/build-image)
using [Docker Compose](https://github.com/docker/compose):

```
docker-compose build
```
