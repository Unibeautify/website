// FIXME
let previousSelectedLanguage;

window.onload = function() {

  loadSelected();

  // Update the code block and push a state change
  document.getElementById("languages-select").onchange = function() {
    const languageName = getSelectedLanguage();
    history.pushState({ language: languageName }, null, `?language=${languageName}`);
    updateCodeExample(languageName);
  }
}

function loadSelected() {
  const language = getLanguageFromUrl();
  language && updateCodeExample(language);
}

// Need to update select list AND code block
window.onpopstate = function(event) {
  const state = event.state || {};
  console.log("location: " + document.location + ", state: " + JSON.stringify(state));
  const { language: selectedLanguage } = state;
  if (selectedLanguage) {
    updateCodeExample(selectedLanguage);
  } else {
    const defaultLanguage = getDefaultLanguage();
    defaultLanguage && updateCodeExample(defaultLanguage);
  }
};

// Updates the code block based on the language
function updateCodeExample(languageName) {
  if (!languageName) {
    return;
  }
  if (languageName === previousSelectedLanguage) {
    return;
  }

  // history.pushState({language: languageId}, null, `?language=${languageId}`);

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

// function getDefaultLanguageIndex() {
//   return options().map(option => option.text).findIndex(option => option.indexOf("*") !== -1);
// }

function getDefaultLanguage() {
  const element = options().find(option => option.text.indexOf("*") !== -1);
  // return options().map(option => option.text).findIndex(option => option.indexOf("*") !== -1);
  return element && element.value;
}

function options() {
  return [].map.call(document.getElementById("languages-select").options, (option) => option);
}