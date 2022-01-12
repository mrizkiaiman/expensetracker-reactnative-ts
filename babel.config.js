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
            '@assets': './src/assets',
            '@components': './src/components',
            '@type': './src/constants/types',
            '@screens': './src/screens',
            '@services': './src/services',
            '@states': './src/states',
            '@utils': './src/utils',
            '@styles': './src/utils/styles',
            '@navigation': './src/screens/_navigation',
            '@nav-types': './src/screens/_navigation/types',
            '@mockdata': './mockdata',
            '@hooks': './src/utils/hooks',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  }
}
