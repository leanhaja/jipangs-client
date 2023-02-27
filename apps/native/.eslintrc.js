module.exports = {
  ...require('eslint-config-custom/index.js'),
  extends: ['@react-native-community'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
}
