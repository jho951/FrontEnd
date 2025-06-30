import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    ignores: ['node_modules/', 'dist/', '.next/', 'build/'],
  },
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        window: true,
        document: true,
        localStorage: true,
        setInterval: true,
        clearInterval: true,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      'no-console': 'warn',
      'no-undef': 'off',
    },
  },
];
