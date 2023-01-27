module.exports = {
  root: true,
  plugins: ['simple-import-sort', 'prettier'],
  extends: ['plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
};
