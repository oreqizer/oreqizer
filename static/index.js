(function () {
  // https://tailwindcss.com/docs/dark-mode
  // See also theme.js
  if (
    sessionStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  }
})();
