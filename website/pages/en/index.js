/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} title="Unibeautify"/>
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <Logo img_src={imgUrl('signet.svg')} />
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={docUrl('getting-started.html', this.props.language)}>Get Started</Button>
            <Button href={docUrl('options-for-languages.html', this.props.language)}>Options</Button>
            <Button href={"https://playground.unibeautify.com/"} target="_blank">Try it out</Button>
          </PromoSection>
          <PromoSection>
            <Button href={docUrl('ci.html', this.props.language)}>Sign up for Unibeautify CI</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align={props.align || "center"} contents={props.children} layout={props.layout} />
  </Container>
);

const Features = props => (
  <Block background="light" layout="fourColumn">
    {[
      {
        content: `Personalize your code style with [40+ configuration options](${docUrl('options-for-languages.html', props.language)}).`,
        image: imgUrl('wrench.svg'),
        imageAlign: 'top',
        title: 'Unparalleled customization',
      },
      {
        content: `Up-to-date documentation with examples are automatically generated from beautifier, language, and option metadata.`,
        image: imgUrl('book.svg'),
        imageAlign: 'top',
        title: 'Diligent documentation',
      },
      {
        content: `Enable multiple beautifiers for each language. For example, easily combine [Prettier](${docUrl('beautifier-prettier.html', props.language)}) with [ESLint](${docUrl('beautifier-eslint.html', props.language)}) by simply changing a couple lines in your config file.`,
        image: imgUrl('connectdevelop.svg'),
        imageAlign: 'top',
        title: 'One beautifier to rule them all',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Detailed Documentation</h2>
    <MarkdownBlock>Up-to-date documentation is automatically generated from beautifier, language, and option metadata.</MarkdownBlock>
  </div>
);

const UnibeautifyCi = props => (
  <Block align="left">
    {[
      {
        content: "Automatically beautify your code on each push with [Unibeautify CI](docs/ci.html)! View a report via [GitHub's Checks API](https://blog.github.com/2018-05-07-introducing-checks-api/) and easily resolve formatting changes by simply merging a branch, allowing you to quickly fix your code without ever leaving GitHub!",
        image: imgUrl('unibeautify-ci-demo.png'),
        imageAlign: 'right',
        title: 'GitHub Automation',
      },
    ]}
  </Block>
);

const TryOut = props => (
  <Block id="try">
    {[
      {
        content: 'Talk about trying this out',
        image: imgUrl('logo.svg'),
        imageAlign: 'left',
        title: 'Try it Out',
      },
    ]}
  </Block>
);

const Description = props => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('logo.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users
    .filter(user => {
      return user.pinned;
    })
    .map((user, i) => {
      return (
        <a href={user.infoLink} key={i}>
          <img src={user.image} title={user.caption} />
          <br />
          {user.caption}
        </a>
      );
    });

  return (
    <div className="productShowcaseSection lightBackground paddingTop paddingBottom">
      <h2>{"Who's Using Unibeautify?"}</h2>
      <p>More than 28,000 monthly active Atom-Beautify users in May 2018 and over 122,000,000 files beautified since April 2016.</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
        <a className="button" href={siteConfig.editUrl.replace("docs/", "website/data/users.yml")}>
          Add your project
        </a>
      </div>
    </div>
  );
};

const LanguagesShowcase = props => {
  if ((siteConfig.languages || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.languages
    .map((language, i) => {
      return (
        <a href={language.infoLink} key={i}>
          <img src={language.image} title={language.name} />
          <br />
          {language.name}
        </a>
      );
    });

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>{"Popular Supported Languages"}</h2>
      {/* <p>This project is used by all these people</p> */}
      <div className="logos">{showcase}</div>
      {/*
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} languages
        </a>
      </div>
      */}
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <LanguagesShowcase language={language} />
          <Features language={language} />
          {/* <FeatureCallout /> */}
          <UnibeautifyCi />
          {/* <TryOut />
          <Description /> */}
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
