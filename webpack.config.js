module.exports = {
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
      vm: require.resolve('vm-browserify'),
      url: require.resolve('url/'),
      util: require.resolve('util/'),
    },
  },
};
