/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'User 1',
    image: 'img/unibeautify.png',
    infoLink: '#',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Unibeautify' /* title for your website */,
  tagline: 'The one beautifier to rule them all',
  url: 'https://unibeautify.github.io/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'unibeautify.github.io',
  editUrl: 'https://github.com/unibeautify/unibeautify.github.io/edit/develop/docs/',
  gaTrackingId: "UA-112681254-1",
  headerLinks: [
    {doc: 'config-file', label: 'Docs'},
    {doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/unibeautify-white.png',
  footerIcon: 'img/unibeautify.png',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#24292e',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright &copy; ' +
    new Date().getFullYear() +
    ' Glavin Wiechert',
  organizationName: 'unibeautify', // or set an env variable ORGANIZATION_NAME
  projectName: 'unibeautify.github.io', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/unibeautify/unibeautify',
  algolia: {
    apiKey: "f48f239ca346334bd0b61308ab16f524",
    indexName: "unibeautify"
  },
};

module.exports = siteConfig;
