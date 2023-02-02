const rootConfig = require('../../prettier.config.cjs');

module.exports = {
  ...rootConfig,
  plugins: [
    ...(rootConfig.plugins ?? []),
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
  overrides: [
    ...(rootConfig.overrides ?? []),
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};
