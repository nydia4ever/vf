// const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.conf');

module.exports = function () {
	
  	return webpackMerge(webpackBaseConfig(), {
      devtool: '#eval-source-map'//,
      //debug: global.febConfig.project.debug
    })
};
