const rules = {
  printWidth: 90,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  singleQuote: true,
  semi: true,
  quoteProps: 'preserve',
};

module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  ...rules,
};
