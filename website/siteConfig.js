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
// const supportedLanguages = loadYaml("./data/languages.yml");

const siteConfig = {
  title: "Unibeautify" /* title for your website */,
  tagline: "Universal Code Beautifier",
  githubUrl: GITHUB_URL,
  url: "https://unibeautify.com/" /* your website url */,
  cname: "unibeautify.com",
  noIndex: false,
  baseUrl: "/" /* base url for your project */,
  editUrl: "https://github.com/unibeautify/website/edit/master/docs/",
  gaTrackingId: "UA-112681254-1",
  headerLinks: [
    { doc: "about", label: "About" },
    { doc: "getting-started", label: "Usage" },
    { href: "https://api.unibeautify.com/", label: "API" },
    { href: "https://assistant.unibeautify.com/", label: "Assistant" },
    { href: "https://playground.unibeautify.com/", label: "Playground" },
    // { page: "help", label: "Help" },
    // { blog: true, label: "Blog" },
    { search: true },
    { href: GITHUB_URL, label: "GitHub" },
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/unibeautify.png",
  footerIcon: "img/unibeautify.png",
  favicon: "img/favicon.ico",
  /* colors for website */
  colors: {
    primaryColor: "#023e7d",
    secondaryColor: "#5ebdfb",
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: `${String.fromCharCode(
    169,
  )} ${new Date().getFullYear()} Glavin Wiechert`,
  organizationName: "unibeautify", // or set an env variable ORGANIZATION_NAME
  projectName: "website", // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default",
  },
  onPageNav: ["separate"],
  scripts: [
    "https://buttons.github.io/buttons.js",
    "../js/selectList.js",
    "../js/waitlist.js",
    "../js/disqus.js",
  ],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: GITHUB_URL,
  algolia: {
    apiKey: "f48f239ca346334bd0b61308ab16f524",
    indexName: "unibeautify",
  },
};

module.exports = siteConfig;
