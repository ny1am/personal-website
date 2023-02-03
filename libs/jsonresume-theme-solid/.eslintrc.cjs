module.exports = {
  extends: '../../.eslintrc.cjs',
  overrides: [
    {
      files: 'src/*.{ts,tsx}',
      plugins: ['solid'],
      extends: ['plugin:solid/typescript', 'plugin:jsx-a11y/recommended'],
    },
  ],
};
