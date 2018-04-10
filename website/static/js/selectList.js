// FIXME
let previousSelectedLanguage;

window.onload = function() {

  loadSelected();

  document.getElementById("languages-select").onchange = function onSelectionChange() {
    const languageName = getSelectedLanguage();
    history.pushState({ language: languageName }, null, `?language=${languageName}`);
    updateCodeExample(languageName);
  }
}

function loadSelected() {
  const language = getLanguageFromUrl();
  language && updateCodeExample(language);
}

window.onpopstate = function onPageChange(event) {
  const state = event.state || {};
  const { language: selectedLanguage } = state;
  if (selectedLanguage) {
    updateCodeExample(selectedLanguage);
  } else {
    const defaultLanguage = getDefaultLanguage();
    defaultLanguage && updateCodeExample(defaultLanguage);
  }
};

function updateCodeExample(languageName) {
  if (!languageName) {
    return;
  }
  if (languageName === previousSelectedLanguage) {
    return;
  }

  const selectList = document.querySelectorAll("div.exampleCode");
  [].forEach.call(selectList, id => id.classList.add("hidden"));
  document.getElementById("example-" + languageName).classList.remove("hidden");

  previousSelectedLanguage = languageName;
  setSelectedLanguage(languageName);
}

function getLanguageFromUrl() {
  const url = new URL(location.href);
  return url.searchParams.get("language");
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
  return options().map(option => option.value).indexOf(selectedLanguage);
}

function getDefaultLanguage() {
  const element = options().find(option => option.text.indexOf("*") !== -1);
  return element && element.value;
}

function options() {
  return [].map.call(document.getElementById("languages-select").options, (option) => option);
}