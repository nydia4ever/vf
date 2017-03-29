"use strict";
const path = require('path');
const fs = require('fs');
const util = require('util');
const glob = require('glob');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const htmlWepPackCfg = require('./webpack.html.conf');
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = function() {

    // 项目的目录
    const projectCwd = global.vfPath.project;

    // node_modules 目录
    const modulePath = global.vfPath.module;
    // 输出目录
    const outputPath = path.join(projectCwd, global.production ? 'output' : 'dev', 'assets/js/');

    // js 目录下，一个 js 文件一个入口
    const entries = {};
    const htmlplugin = [];
    glob.sync(path.join(projectCwd, './src/*.js')).forEach((filePath) => {
      const prop = path.basename(filePath, '.js');
      const swig = path.dirname(filePath) + path.sep + prop + '.swig' //每个js文件对应一个模板文件
        //htmlplugin.push(htmlWepPackCfg(subDir,basename, pathCfg));
      if (fs.existsSync(swig)) {
        //console.log(swig + '对应的模板文件存在')
        htmlplugin.push(htmlWepPackCfg(swig));
      }
      entries[prop] = filePath;
    });


    // webpack 基础配置  https://webpack.js.org/configuration/entry-context/#context
    let webpackBaseConfig = {
      context: projectCwd,
      cache: true,
      profile: false,
      entry: entries,
      output: {
        path: outputPath,
        publicPath: './assets/js/',
        filename: '[name].js'
      },
      resolveLoader: {
        modules: modulePath
      },
      resolve: {
        modules: [path.join(projectCwd, './src/js'), "spritesmith-generated"].concat(modulePath),
        extensions: ['.js', '.styl']
      },
      //todo 
      /*devServer: {
        contentBase: './public',
        color: true,
        historyApiFallback: true,
        inline: true
      },*/

      module: {
        rules: [{
            test: /\.styl$/,
            use: ExtractTextPlugin.extract({ //'sprite-loader','postcss-loader', 可以在output的时候再加
              use: [
                'css-loader',
                'postcss-loader?config=' + path.join(__dirname ,'../config'),  //指定配置文件地址
                'stylus-loader', 
              ]
            })
          }, {
            test: /\.json$/,
            use: ['json-loader']
          },{
            test: /\.(jpe?g|png|gif)$/i,
            loaders: [{
              loader: 'file-loader',
              options: {
                name: 'images/[name].[hash:7].[ext]'
              }
            }]}
          ]
          //noParse: ['vendor'],
        },

        plugins: [
          //通过DefinePlugin可以定义一些全局的变量，我们可以在模块当中直接使用这些变量，无需作任何声明
          //eg:入口app.js
          //console.log(DESCRIPTION);
          new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: false,
            allChunks: true
          }),
          new webpack.DefinePlugin({
            __PROD__: global.production,
            __DEV__: !global.production
          }),
          new webpack.optimize.UglifyJsPlugin({
            beautify: false,
            mangle: {
              screw_ie8: true,
              keep_fnames: true
            },
            compress: {
              screw_ie8: true
            },
            comments: false
          })
        ].concat(htmlplugin)

      };

      return webpackBaseConfig;
    };