// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const jestPlugin = require('eslint-plugin-jest');

module.exports = defineConfig([
  expoConfig,
  {
        files: ['**/*.test.js', '**/*.test.ts', '**/*.test.tsx', 'e2e/**/*.js'],
     plugins: {
      jest: jestPlugin,
    },
     languageOptions: {
      globals: jestPlugin.environments.globals.globals,
        device: true,
        element: true,
        by: true,
        expect: true,
        waitFor: true,
    },
      rules: {
      ...jestPlugin.configs.recommended.rules,
    },
     ignores: ['dist/*'],
  },
]);
