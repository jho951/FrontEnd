import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.FlatConfig[]} */
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
        sessionStorage: true,
        navigator: true,
        HTMLElement: true,
        HTMLDivElement: true,
        HTMLButtonElement: true,
        HTMLAnchorElement: true,
        HTMLLIElement: true,
        SVGSVGElement: true,
        ResizeObserver: true,
        KeyboardEvent: true,
        MouseEvent: true,
        Node: true,
        URL: true,

        // Node 전역
        require: true,
        process: true,
        __dirname: true,
        module: true,
        exports: true,
        console: true,
        Buffer: true,
        global: true,
        NodeJS: true,

        // Timer
        setTimeout: true,
        clearTimeout: true,
        setInterval: true,
        clearInterval: true,
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      'no-console': 'warn',
    },
  },
];
