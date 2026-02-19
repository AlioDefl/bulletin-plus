/**
 * IUT Bulletin+ — Content Script (Loader)
 * Injects app.js into the PAGE context so we can intercept fetch.
 */
(function() {
  const s = document.createElement("script");
  s.src = chrome.runtime.getURL("app.js");
  s.onload = () => s.remove();
  (document.head || document.documentElement).appendChild(s);
})();
