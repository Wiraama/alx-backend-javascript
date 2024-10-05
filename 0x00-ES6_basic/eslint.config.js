/** @type {import('eslint').FlatConfig} */
const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig([
  {
    languageOptions: {
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'off',
      'no-shadow': 'off',
      'no-restricted-syntax': [
        'error',
        'LabeledStatement',
        'WithStatement',
      ],
    },
    // Specifying the overrides section separately
    overrides: [
      {
        files: ['*.js'],
        excludedFiles: 'babel.config.js',
      }
    ],
  },
  // Add configurations for environments (browser, es6, jest) under the plugins section if needed
  {
    plugins: ['jest'],
    rules: {
      // Jest rules can be added here
      // For example, if you want to customize jest rules, add them here
    },
  },
])
