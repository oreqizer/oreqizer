const path = require('node:path');

const nextLint = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  '*.{js,cjs,mjs,ts,tsx}': [nextLint, 'prettier --write'],
  '*.{md,mdx}': ['prettier --write'], // also lint this pls
  '*.{json}': ['prettier --write'],
  '*.{css}': ['stylelint --allow-empty-input', 'prettier --write'],
};
