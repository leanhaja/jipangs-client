module.exports = function (api) {
  api.cache(true)
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
          },
        },
      ],
    ],
    presets: ['babel-preset-expo'],
  }
}
