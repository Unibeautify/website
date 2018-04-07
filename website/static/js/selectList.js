window.onload = function() {
  document.getElementById("languages-select").onchange = function() {
    let languageId = document.getElementById("languages-select").value;
    let selectList = document.querySelectorAll("div.exampleCode");
    [].forEach.call(selectList, id => {
      id.classList.add("hidden");
    })
    document.getElementById(languageId).classList.remove("hidden");
  }
}
