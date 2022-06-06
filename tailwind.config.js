const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: "class",
  content: ["templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FA3F3C",
        background: colors.white,
        ink: colors.black,
        white: colors.white,
        black: colors.black,
        dark: {
          background: colors.black,
          ink: colors.white,
        },
      },
    },
  },
  plugins: [],
};
