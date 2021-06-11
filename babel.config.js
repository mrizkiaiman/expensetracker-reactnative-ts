module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
          alias: {
            '@root': './',
            '@app': './src',
            '@assets': './assets',
            '@components': './src/components',
            '@screens': './src/screens',
            '@services': './src/services',
            '@states': './src/states',
            '@utils': './src/utils',
            '@styles': './src/styles',
            '@navigation': './src/screens/_navigation',
          },
        },
      ],
    ],
  }
}
