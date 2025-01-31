const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = function (context, options) {
  return {
    name: 'webpack-plugin',
    configureWebpack(config, isServer) {
      if (!isServer) {
        return {
          resolve: {
            fallback: {
              path: require.resolve('path-browserify'),
              fs: false,
              os: require.resolve('os-browserify/browser'),
              crypto: require.resolve('crypto-browserify'),
              stream: require.resolve('stream-browserify'),
              assert: require.resolve('assert/'),
              util: require.resolve('util/'),
              url: require.resolve('url/'),
              tty: require.resolve('tty-browserify'),
              constants: require.resolve('constants-browserify'),
              vm: require.resolve('vm-browserify'),
              module: false,
              buffer: require.resolve('buffer/'),
              process: require.resolve('process/browser'),
              v8: false,
              perf_hooks: false,
              readline: false,
              'child_process': false
            }
          },
          plugins: [
            new webpack.ProvidePlugin({
              process: 'process/browser',
              Buffer: ['buffer', 'Buffer']
            }),
            new NodePolyfillPlugin()
          ]
        };
      }
      return {};
    }
  };
}; 