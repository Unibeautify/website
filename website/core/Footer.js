/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const siteConfig = require(process.cwd() + '/siteConfig.js');
const debug = siteConfig.debug;

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
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div className="wrapper">
            <div className="row">
              <div className="col-12 col-lg-3">
                <a href={this.props.config.baseUrl} className="nav-home">
                  {this.props.config.footerIcon && (
                    <img
                      src={this.props.config.baseUrl + this.props.config.footerIcon}
                      alt={this.props.config.title}
                    />
                  )}
                </a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <h5>Docs</h5>
                <a href={this.docUrl('getting-started.html', this.props.language)}>Getting Started</a>
                <a href={this.docUrl('cli.html', this.props.language)}>CLI</a>
                <a href={this.docUrl('config-file.html', this.props.language)}>Configuration</a>
                <a href={this.docUrl('options-for-languages.html', this.props.language)}>Options</a>
              </div>
              <div className="col-6 col-sm-4 col-lg-2">
                <h5>Community</h5>
                <a href={this.pageUrl('users.html', this.props.language)}>User Showcase</a>
                <a
                  href="http://stackoverflow.com/questions/tagged/unibeautify"
                  target="_blank">
                  Stack Overflow
                </a>
                <a href="https://twitter.com/Unibeautify" target="_blank">@Unibeautify on Twitter</a>
                {!debug ? (
                  <span>
                    <a href="https://twitter.com/intent/follow?screen_name=unibeautify" target="_blank">
                      <img
                        alt="Follow Unibeautify on Twitter"
                        src="https://img.shields.io/twitter/follow/unibeautify.png?label=Follow+Unibeautify&style=flat"
                      />
                    </a>
                    <a 
                      href="https://unibeautify-slack.glitch.me/" 
                      target="_blank">
                      <img src="https://unibeautify-slack.glitch.me/badge.svg" />
                    </a>
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
              <div className="col-12 col-sm-4 col-lg-2">
                <h5>More</h5>
                <a href="https://github.com/unibeautify">GitHub</a>
                {!debug ? (
                  <span>
                    <a href="https://github.com/Unibeautify/unibeautify/stargazers" target="_blank">
                      <img
                        alt="Star Unibeautify on GitHub"
                        src="https://img.shields.io/github/stars/Unibeautify/unibeautify.svg?style=flat&label=Stars"
                      />
                    </a>
                    <a href="https://github.com/Unibeautify/unibeautify/network" target="_blank">
                      <img
                        alt="Code coverage of Unibeautify"
                        src="https://img.shields.io/github/forks/Unibeautify/unibeautify.svg?style=flat&label=Fork"
                      />
                    </a>
                    <a href="https://github.com/Unibeautify/unibeautify/issues" target="_blank">
                      <img
                        alt="Code coverage of Unibeautify"
                        src="https://img.shields.io/coveralls/github/Unibeautify/unibeautify/master.svg"
                      />
                    </a>
                  </span>
                ) : (
                  <span></span>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="copyright">
          <div className="wrapper">
            <div className="row">
              <div className="col">
                {siteConfig.copyright}
              </div>
              <div className="col-auto align-self-end">        
                <a href={this.docUrl('credits.html', this.props.language)}>Credits</a>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
