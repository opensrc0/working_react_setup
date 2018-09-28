module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    'postcss-cssnext': {
      browsers: [
        '> 1%',
        'last 4 versions',
        'Firefox ESR',
        'Opera 12.1',
        'last 2 OperaMini versions',
        'last 2 Samsung versions',
        'last 2 UCAndroid versions',
        'not ie < 9',
      ],
    },
  },
};
