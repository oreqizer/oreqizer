const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: "class",
  content: ["templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FA3F3C",
        "primary-dark": "#D93734",
        background: colors.slate["50"],
        "background-dark": colors.slate["900"],
        ink: colors.slate["900"],
        "ink-dark": colors.slate["50"],
      },
    },
  },
  plugins: [],
};
