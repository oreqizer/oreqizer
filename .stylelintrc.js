module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-css-modules'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'layer'],
      },
    ],
  },
};
