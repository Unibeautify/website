let previousSelectedLanguage;

window.onload = function() {
  const langSelectedElement = document.querySelectorAll('.nav-link');

  if (langSelectedElement.length == 0) return;

  loadSelected();
  
  langSelectedElement.forEach(function(tab) {
    tab.addEventListener('click', function(e) {
      const languageName = e.target.innerHTML;
      history.pushState({ language: languageName }, null, `?language=${languageName}`);
    })
  });
};

function loadSelected() {
  const language = getLanguageFromUrlParam(); // || getLanguageFromHash();
  language && updateCodeExample(language);
}

window.onpopstate = function onPageChange(event) {
  const state = event.state || {};
  const {
    language: selectedLanguage, //= getLanguageFromHash()
  } = state;
  if (selectedLanguage) {
    updateCodeExample(selectedLanguage);
  } else {
    const defaultLanguage = getDefaultLanguage();
    defaultLanguage && updateCodeExample(defaultLanguage);
  }
};

function updateCodeExample(languageName) {
  languageName = fixLanguage(languageName);
  element = [...document.querySelectorAll(".nav-tabs .nav-link")].filter(text => text.textContent === languageName);
  if (!languageName) {
    return;
  }
  if (languageName === previousSelectedLanguage) {
    return;
  }

  const elId = "example-" + languageName;
  const selectedElement = document.getElementById(elId);
  if (selectedElement) {
    const selectList = document.querySelectorAll("div.exampleCode");
    [].forEach.call(selectList, element => element.classList.add("hidden"));
    selectedElement.classList.remove("hidden");
    previousSelectedLanguage = languageName;
    setSelectedLanguage(languageName);
  } else {
    console.warn("Element with ID " + elId + " was not found.");
    console.log(selectedElement);
  }
}

function getLanguageFromUrlParam() {
  const url = new URL(location.href);
  return url.searchParams.get("language");
}

function getLanguageFromHash() {
  const hash = document.location.hash;
  if (typeof hash === "string") {
    return hash.slice(1);
  }
}

function getSelectedLanguage() {
  return document.getElementById("languages-select").value;
}

function setSelectedLanguage(languageId) {
  const index = getSelectedLanguageIndex(languageId);
  setSelectedLanguageIndex(index);
}

function setSelectedLanguageIndex(languageIndex) {
  document.getElementById("languages-select").selectedIndex = languageIndex;
}

function getSelectedLanguageIndex(selectedLanguage) {
  return options()
    .map(option => option.value)
    .indexOf(selectedLanguage);
}

function getDefaultLanguage() {
  const element = options().find(option => option.text.indexOf("*") !== -1);
  return element && element.value;
}

function options() {
  return [].map.call(document.getElementById("languages-select").options, option => option);
}

function fixLanguage(rawLanguage) {
  switch (rawLanguage) {
    case "html-erb":
      return "html+erb";
    case "titanium-style-sheets":
      return "titaniumstylesheets";
    default:
      return rawLanguage;
  }
}
