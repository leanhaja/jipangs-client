module.exports = {
  plugins: [
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'typescript-sort-keys',
    'better-styled-components',
  ],
  settings: {
    next: {
      rootDir: ['apps/*/', 'packages/*/'],
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['apps/*/tsconfig.json'],
      },
    },
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:typescript-sort-keys/recommended',
    'plugin:@next/next/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  rules: {
    'react/jsx-props-no-spreading': ['error', { exceptions: ['Component'] }],
    'react/jsx-sort-props': [
      'error',
      { multiline: 'first', reservedFirst: true },
    ],
    'react/jsx-props-no-spreading': 'off',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/order': [
      // ref https://github.com/import-js/eslint-plugin-import/blob/main/README.md
      'error',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        'newlines-between': 'always',
      },
    ],
    '@typescript-eslint/naming-convention': [
      // ref https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/naming-convention.md
      'error',
      { selector: 'variable', format: ['strictCamelCase', 'UPPER_CASE'] },
      {
        selector: 'variable',
        types: ['function'],
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
      },
      { selector: 'typeLike', format: ['StrictPascalCase'] },
    ],
    'sort-destructure-keys/sort-destructure-keys': 'error',
    'sort-keys-fix/sort-keys-fix': ['error', 'asc', { natural: true }],
    'import/no-anonymous-default-export': 'off',
    'react/require-default-props': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    '@next/next/no-html-link-for-pages': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'better-styled-components/sort-declarations-alphabetically': 2,
    '@typescript-eslint/no-unused-vars': 'error',
  },
  ignorePatterns: [
    '**/*.js',
    '**/*.json',
    'node_modules',
    'public',
    '.next',
    'coverage',
    'dist',
    '.turbo',
  ],
}
