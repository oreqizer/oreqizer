const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: "class",
  content: ["src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        background: colors.white,
        ink: colors.black,
        link: colors.blue["600"],
        white: colors.white,
        black: colors.black,
        glitch: {
          red: "#ff00c1",
          blue: "#3498db",
        },
        dark: {
          background: colors.black,
          ink: colors.white,
        },
      },
    },
  },
  plugins: [],
};
