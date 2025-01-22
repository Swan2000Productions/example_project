const webpack = require('webpack');

module.exports = {
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "buffer": require.resolve("buffer/"),
      "process": require.resolve("process/browser"),
      "util": require.resolve("util/"),
      "vm": require.resolve("vm-browserify")  // Add polyfill for vm
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',  // Ensures process is available globally
      Buffer: ['buffer', 'Buffer'],  // Polyfill Buffer globally
    })
  ]
};
