module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    worker: true,
    serviceworker: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  rules: {
    'no-alert': 'error',
  },
};
