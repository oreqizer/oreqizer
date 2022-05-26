(function () {
  const btn = document.getElementById("theme");

  // https://tailwindcss.com/docs/dark-mode
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    document.documentElement.classList.add("dark");
    btn.innerHTML = "☀️";
  } else {
    btn.innerHTML = "🌙";
  }

  btn.addEventListener("click", function () {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      btn.innerHTML = "🌙";
    } else {
      document.documentElement.classList.add("dark");
      btn.innerHTML = "☀️";
    }
  });
})();
