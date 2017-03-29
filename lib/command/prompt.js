const inquirer = require('inquirer');
const chalk = require('chalk');
const shell = require('shelljs');

const cmdWp = require('./webpack');

//const cmdInit = require('./init');
//const cmdHelp = require('./help');


/**
 * 处理命令函数
 *
 * @param cmd String 命令有如下：dev, output, init, help, exit
 */
function processCmd(cmd) {
  switch (cmd) {
    case 'dev':
    case 'output':
      cmdWp(cmd);
      break;
    case 'init':
      //cmdInit();
      break;
    case 'help':
      //cmdHelp();
      break;
    case 'exit':
      shell.exit(0);
      break;
    default:
      break;
  }
}

module.exports = function () {
  /*console.log('\n');
  console.log(chalk.bold('欢迎使用 FEB（Front End Builder）！'));
  console.log(chalk.blue('http://feteam.yypm.com/feb/'));
  console.log(`当前版本：${chalk.green(version)}`);
  console.log('\n');
  console.log(`构建开发任务可以直接执行：${chalk.yellow.bold('feb dev')} 或 ${chalk.yellow.bold('feb d')}`);
  console.log(`构建发布任务可以直接执行：${chalk.yellow.bold('feb output')} 或 ${chalk.yellow.bold('feb o')}`);
  console.log(`生成种子项目可以直接执行：${chalk.green.bold('feb init')} 或 ${chalk.green.bold('feb i')}`);
  console.log(`一脸懵逼需要帮助的可以直接执行：${chalk.blue.bold('feb help')} 或 ${chalk.blue.bold('feb h')}`);
  console.log('\n');*/

  const question = {
    type: 'rawlist',
    name: 'mode',
    message: '请选择任务：',
    default: 4,
    choices: [
      {
        value: 'dev',
        name: '开发（开发用，产生 dev 目录）'
      },
      {
        value: 'output',
        name: '发布（发布用，产生 output 目录）'
      },
      {
        value: 'init',
        name: '生成种子项目（初始用，一些 FEB 的展示例子）'
      },
      {
        value: 'help',
        name: '帮助（如果你不知道如何开始的话，选择个。。）'
      },
      {
        value: 'exit',
        name: '退出（Bye bye）'
      }
    ]
  };

  inquirer.prompt([question]).then((answers) => {
    processCmd(answers.mode);
  });
};
