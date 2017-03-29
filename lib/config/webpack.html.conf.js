const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob');
const path = require("path");
const fs = require('fs');
//var swigData = require('./swigData');   //swig模板时的初始化数据

function htmlPackCfg(pathfile){

        const pageData = {
            title:'asdfasdf',
            aa:11 
        };
        //Object.assign(targetObj, source1,source2);

        const query = {
            varControls: ['{[', ']}'],
            locals:pageData
        };



        const conf = {
            //node_env: process.env.NODE_ENV,  //环境变量
            filename: path.basename(pathfile, '.swig') + '.html', //生成的html存放路径，相对于path
            template: 'swig-loader?varControls[]={[&varControls[]=]}!' + pathfile + '?title=111', //swig模板路径
            inject: false,    //js插入的位置，true/'head'/'body'/false
            minify: { //压缩HTML文件
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: false //删除空白符与换行符
            }
        };
        console.log(conf);
        conf.inject = 'body';
        //'vendors' 公用文件,多页面,暂时不用提取公用部分;如果需要,手工提取,包含名子即可
        //    conf.chunks = ['webpack-dev-server', pathCfg.router + '/' + subDir + '/'+  basename];     //webpack-dev-server 已单独在模板里加入
        /*conf.chunks = [];
        if(pathCfg.dest === "build"){
            conf.chunks.push(pathCfg.router + '/' + subDir + '/common');
        }
        conf.chunks.push(pathCfg.router + '/' + subDir + '/'+  basename);

        conf.hash = true;*/

        return new HtmlWebpackPlugin(conf);
}

module.exports = htmlPackCfg;