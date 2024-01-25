import type { Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './playwright/*.{js,ts,jsx,tsx,mdx}', // wrapper for Playwright
  ],
  theme: {
    extend: {
      colors: {
        background: colors.white,
        ink: colors.black,
        link: colors.blue['600'],
        white: colors.white,
        black: colors.black,
        glitch: {
          red: '#ff00c1',
          blue: '#3498db',
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

export default config;
