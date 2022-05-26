const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */
module.exports = {
  darkMode: "class",
  content: ["templates/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#FA3F3C",
        secondary: "#3CFA78",
        background: colors.slate["100"],
        ink: colors.slate["900"],
        dark: {
          primary: "#D93734",
          secondary: "#037B27",
          background: colors.slate["900"],
          ink: colors.slate["100"],
        },
      },
    },
  },
  plugins: [],
};
