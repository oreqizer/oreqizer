(function () {
  const btn = document.getElementById("theme");

  if (
    sessionStorage.getItem("theme") === "dark" ||
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }

  // https://tailwindcss.com/docs/dark-mode
  btn.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      sessionStorage.setItem("theme", "light");
      btn.innerHTML = "🌙";
    } else {
      document.documentElement.classList.add("dark");
      sessionStorage.setItem("theme", "dark");
      btn.innerHTML = "☀️";
    }
  });
})();
