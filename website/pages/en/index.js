/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
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

// ==========================================
// Elements

class Button extends React.Component {
  render() {
    return (
      <a
        className="button outline light"
        href={this.props.href}
        target={this.props.target}>
        {this.props.children}
      </a>
    );
  }
}

Button.defaultProps = {
  target: '_self'
};

const ButtonGroup = props => (
  <div className="button-group">{props.children}</div>
);

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    className={props.className}
    background={props.background}>
    <GridBlock align={props.align || 'center'} contents={props.children} layout={props.layout}/>
  </Container>
);

// ==========================================
// HomeSplash

const SplashContainer = props => (
  <hero>
    <Container className="align-items-center">{props.children}</Container>
  </hero>
);

const Logo = props => (
  <div className="logoWrapper">
    <img src={props.img_src}/>
  </div>
);

const ProjectTitle = () => (
  <div>
    <h1>{siteConfig.title}</h1>
    <h2>{siteConfig.tagline}</h2>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <SplashContainer>
        <div className="row align-items-center justify-content-between">
          <div className="col col-lg-auto">
            <ProjectTitle/>
            <ButtonGroup>
              <Button href={"https://github.com/apps/unibeautify-ci"} target="_blank">
                Install
              </Button>
              <Button href={docUrl('getting-started.html', language)}>
                Documentation
              </Button>
            </ButtonGroup>
          </div>
          <div className="d-none d-lg-block col-auto">
            <Logo img_src={imgUrl('signet-white.svg')}/>
          </div>
        </div>
      </SplashContainer>
    );
  }
}

// ==========================================
// Sections

const LanguagesShowcase = () => {
  if ((siteConfig.languages || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.languages.map((language, i) => {
    return (
      <a href={language.infoLink} key={i}>
        <img src={language.image} title={language.name}/>
        <br/> {language.name}
      </a>
    );
  });

  return (
    <div className="productShowcaseSection languages paddingBottom paddingTop">
      <h2>{"Supported Languages"}</h2>
      <div className="logos">
          {showcase}
          <a href={"/docs/languages.html"}>
              <img src={imgUrl("languages/more.png")} title={"And more..."}/>
              <br/>
              And more...
          </a>
      </div>
    </div>
  );
};

const Features = props => (
  <Block background="shadow" layout="threeColumn" className="featureSection">
    {
      [
        {
          title: 'Unparalleled customization',
          content: `Personalize your code style and create a constant style across all maintainers<br> with [40+ configuration options](${docUrl('options-for-languages.html', props.language)}).`,
          image: imgUrl('icons/cog.svg'),
          imageAlign: 'top'
        }, {
          title: 'Diligent documentation',
          content: `Up-to-date documentation with [hundreds of examples](${docUrl('contributing-examples.html')}) is automatically generated from beautifier, language, and option metadata.`,
          image: imgUrl('icons/book.svg'),
          imageAlign: 'top'
        }, {
          title: 'One to rule them all',
          content: `Enable multiple beautifiers for each language. For example, easily combine [Prettier](${docUrl('beautifier-prettier.html', props.language)}) with [ESLint](${docUrl('beautifier-eslint.html', props.language)}) by simply changing your config file.`,
          image: imgUrl('icons/bag.svg'),
          imageAlign: 'top'
        }
      ]
    }
  </Block>
);

const UnibeautifyCi = () => (
  <Block align="left" className="featherImage ubiCISection">
    {
      [
        {
          title: `![](${imgUrl('icons/tasks.svg')}#icon) GitHub Automation`,
          content: 'Automatically beautify your code on each push with [Unibeautify CI](docs/ci.html)! View a report via [GitHub\'s Checks API](https://blog.github.com/2018-05-07-introducing-checks-api/) and easily resolve formatting changes by simply merging a branch, allowing you to quickly fix your code without ever leaving GitHub!',
          image: imgUrl('previews/ubi-ci-demo.png'),
          imageAlign: 'right'
        }
      ]
    }
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }
  const showcase = siteConfig.users.filter(user => {
    return user.pinned;
  }).map((user, i) => {
    return (
      <a href={user.infoLink} key={i}>
        <img src={user.image} title={user.caption}/>
        <br/> {user.caption}
      </a>
    );
  });

  return (
    <div className="productShowcaseSection lightBackground paddingTop paddingBottom">
      <h2>{'Who\'s Using Unibeautify?'}</h2>
      <p>
        More than 28,000 monthly active Atom-Beautify users in May 2018 and over 122,000,000 files beautified since April 2016.
      </p>
      <div className="logos">{showcase}</div>
      <div className="more-users button-group">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title}&nbsp;
          Users
        </a>
        <a className="button primary" href={siteConfig.editUrl.replace('docs/', 'website/data/users.yml')}>
          Add your project
        </a>
      </div>
    </div>
  );
};

// ==========================================
// Render page

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <main>
        <HomeSplash language={language}/>
        <div className="mainContainer">
          <LanguagesShowcase language={language}/>
          <Features language={language}/>
          <UnibeautifyCi/>
          <Showcase language={language}/>
        </div>
      </main>
    );
  }
}

module.exports = Index;