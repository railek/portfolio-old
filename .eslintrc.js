const path = require('path');
const fs = require('fs');

module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['prettier', 'import'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
  },
};
