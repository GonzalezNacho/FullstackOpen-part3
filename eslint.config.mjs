import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin-js'


export default defineConfig([
  { ignores: ['dist/**'] },
  {
    files: ['**/*.{js,mjs,cjs}'], plugins: { js, stylistic }, extends: ['js/recommended'],
    rules: {
      'eqeqeq': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-spacing': ['error', 'always'],
      'arrow-spacing': ['error', { 'before': true, 'after': true }],
      'stylistic/indent': ['error', 2],
      'stylistic/linebreak-style': ['error', 'unix'],
      'stylistic/quotes': ['error', 'single'],
      'stylistic/semi': ['error', 'never'],
      'no-console':0
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: { globals: globals.node, sourceType: 'commonjs', ecmaVersion: 'latest' }
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { globals: globals.browser }
  },
])