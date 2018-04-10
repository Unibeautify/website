// FIXME
let previousSelectedLanguage;

window.onload = function() {

  loadSelected();

  // Update the code block and push a state change
  document.getElementById("languages-select").onchange = function() {
    // const selectedLanguage = document.getElementById("languages-select").value;
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
  // TODO: Get languageId from event
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

// 73.210.34.54:3000

/* Tasks:
- [x] Default to first language with example
- [x] Refresh currently selected language from select list
- [x] Load from URL on first page load
- [x] Update URL query parameter to be in sync with currently selected language
- [x] Browser back/forward buttons change state (check URL and selected language and select list)
- [x] If no language in parameter, revert to default
*/
