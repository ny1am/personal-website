const rules = {
  printWidth: 90,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  quoteProps: 'preserve',
  'overrides': [
    {
      'files': '*.json',
      'options': {
        'parser': 'json',
      },
    },
  ],
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
