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
            '@app': './src',
            '@assets': './assets',
            '@components': './src/components',
            '@domain': './src/domain',
            '@models': './src/models',
            '@screens': './src/screens',
            '@services': './src/domain/services',
            '@states': './src/states',
            '@utils': './src/utils',
            '@styles': './src/utils/styles',
            '@navigation': './src/screens/_navigation',
            '@mockdata': './mockdata',
            '@hooks': './src/utils/hooks',
          },
        },
      ],
    ],
  }
}
