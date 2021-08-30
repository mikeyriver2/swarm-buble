module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'linebreak-style': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'arrow-body-style': 'off',
    'react/jsx-props-no-spreading': 'off', // spread is gud for the soul
  },
};
