// Docs: https://docusaurus.io/docs/en/site-config.html

const parseYaml = require("js-yaml").safeLoad;
const path = require("path");
const fs = require("fs");

const PACKAGE = require("../package");
const GITHUB_URL = "https://github.com/unibeautify/unibeautify";

function loadYaml(fsPath) {
  return parseYaml(fs.readFileSync(path.join(__dirname, fsPath), "utf8"));
}

const users = loadYaml("./data/users.yml");
// const editors = loadYaml("./data/editors.yml");
const languages = loadYaml("./data/languages.yml");

const siteConfig = {
  title: "Unibeautify",
  organizationName: "unibeautify", // or set an env variable ORGANIZATION_NAME
  projectName: "website", // or set an env variable PROJECT_NAME
  tagline: "The Universal Code Beautifier",
  url: "https://unibeautify.com/",
  baseUrl: "/",
  cname: "unibeautify.com",
  cleanUrl: true,
  useEnglishUrl: false,
  noIndex: false,
  gaTrackingId: "UA-112681254-1",
  githubUrl: GITHUB_URL,
  repoUrl: GITHUB_URL,
  editUrl: "https://github.com/unibeautify/website/edit/master/docs/",
  debug: true,

  // Header and footer
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { doc: "about", label: "About" },
    // { href: "https://api.unibeautify.com/", label: "API" },
    { href: "https://assistant.unibeautify.com/", label: "Assistant" },
    { href: "https://playground.unibeautify.com/", label: "Playground" },
    // { page: "help", label: "Help" },
    // { blog: true, label: "Blog" },
    { href: GITHUB_URL, label: "GitHub" },
    { search: true },
  ],
  disableHeaderTitle: true,
  headerIcon: "img/logo-reversed-white.svg",
  footerIcon: "img/logo-reversed-white.svg",
  favicon: "img/favicon.ico",

  // Import users and languages
  users,
  languages,

  // Style specific
  scrollToTop: true,
  scrollToTopOptions: {
    showWhenScrollTopIs: 300,
  },
  onPageNav: "separate",
  colors: {
    primaryColor: "#388ede",
    secondaryColor: "#303438",
  },
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "atom-one-dark",
  },
  scripts: [
    "https://buttons.github.io/buttons.js",
    "../js/jquery-3.3.1.min.js",
    "../js/featherlight.js",
    "../js/featherlight.gallery.js",
    "../js/selectList.js",
    "../js/disqus.js",
    "../js/theme.js",
  ],
  stylesheets: [
    "https://fonts.googleapis.com/css?family=IBM+Plex+Mono|Lato:400,700"
  ],

  // Addition meta
  ogImage: 'img/og/facebook-banner.png',

  // Twitter
  twitter: true,
  twitterUsername: 'unibeautify',
  twitterImage: 'img/og/twitter-card.png',

  // Facebook
  // facebookAppId: '1615782811974223',
  // facebookComments: true,
  // facebookPixelId: '352490515235776',

  // Algolia
  algolia: {
    apiKey: "f48f239ca346334bd0b61308ab16f524",
    indexName: "unibeautify",
  },
  
  // Copyright used in /core/Footer.js and blog rss/atom feeds.
  copyright: `${String.fromCharCode(
    169,
  )} ${new Date().getFullYear()} Glavin Wiechert`,
};

module.exports = siteConfig;
