const path = require('path');
const fs = require('fs');
const requireDir = require('require-dir');

const chalk = require('chalk');
const shell = require('shelljs');
const version = require('../../package.json').version;
const tasks = requireDir('../tasks', { recurse: true });

//const wpOpt = require("webpack/bin/convert-argv")(yargs, argv, {
//	outputFilename: "/bundle.js"
//});


// 检查是否 output，设置 global.production 全局属性
if (process.argv.indexOf('output') > -1) {
  global.production = true;
}

module.exports = function (env) {
  console.log('\n');
  console.log(`正在使用 vf ${chalk.green(version)} 执行 ${chalk.yellow(env)} 任务...`);

  if (!fs.existsSync('./src')) {
 	 console.log(chalk.red.bold('出错了～找不到源文件 src 目录！请检查当前路径是否正确！'));
    shell.exit(0);
  }

  process.argv = [];
  process.argv.push(
    '--env', env,
    '--config',path.resolve(__dirname, '../config/webpack.dev.conf.js')//,
    //'--port','9080'
    //'--progress',true,  加了此行启动出错
    //'--open',true
  );

  //require('webpack-dev-server/bin/webpack-dev-server'); // eslint-disable-line global-require
  require('webpack/bin/webpack');
};
