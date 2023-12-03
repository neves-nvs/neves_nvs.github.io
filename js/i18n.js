"use strict";

i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init({
  // debug: true,
  fallbackLng: "en",
  fallbackNS: "translation",
  lng: "en",
});

document
  .getElementById("languageSelect")
  .addEventListener("change", function (event) {
    const selectedLang = event.target.value;
    i18next.changeLanguage(selectedLang, (err, t) => {
      if (err) return console.error("something went wrong loading", err);
      updateContent();
    });
  });

function updateContent() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = i18next.t(key);
  });
}

i18next.on("languageChanged", () => {
  updateContent();
});
