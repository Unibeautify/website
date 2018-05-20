/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}${doc}`;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('getting-started.html', this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl('options-for-languages.html', this.props.language)}>
              Options
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a>
            <a
              href="http://stackoverflow.com/questions/tagged/unibeautify"
              target="_blank">
              Stack Overflow
            </a>
            <a href="https://unibeautify-slack.glitch.me/" target="_blank">Slack <img src="https://unibeautify-slack.glitch.me/badge.svg" /></a>
            <a href="https://twitter.com/Unibeautify" target="_blank">
              @Unibeautify on Twitter
            </a>
            <object
              type="image/svg+xml"
              data="https://img.shields.io/twitter/follow/unibeautify.svg?label=Follow+Unibeautify&style=social"
            >
              <a href="https://twitter.com/intent/follow?screen_name=unibeautify">
                <img
                  alt="Follow Unibeautify on Twitter"
                  src="https://img.shields.io/twitter/follow/unibeautify.png?label=Follow+Unibeautify&style=social"
                />
              </a>
            </object>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/unibeautify">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          {siteConfig.copyright}
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
