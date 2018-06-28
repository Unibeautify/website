# Unibeautify Website

## Contributing

Install dependencies:

```
# For scripts
yarn install

# For Docusaurus
cd website
yarn install
```

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
