const webpack = require('webpack');

module.exports = {
  // ... other config options
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "fs": false,
      "os": require.resolve("os-browserify/browser"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "assert": require.resolve("assert/"),
      "util": require.resolve("util/"),
      "url": require.resolve("url/"),
      "tty": require.resolve("tty-browserify"),
      "constants": require.resolve("constants-browserify"),
      "vm": require.resolve("vm-browserify"),
      "module": false,
      "process": require.resolve("process/browser")
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]
}; 