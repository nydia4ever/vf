const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');

module.exports = function () {
  return webpackMerge(webpackBaseConfig(), {
    bail: true,
    plugins: [
      // new webpack.NoErrorsPlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: global.febConfig.js.assets,
          warnings: global.febConfig.project.debug,
          drop_console: !global.febConfig.js.console
        },
        mangle: {
          screw_ie8: global.febConfig.js.assets
        },
        output: {
          screw_ie8: global.febConfig.js.assets
        }
      })
    ]
  });
};
