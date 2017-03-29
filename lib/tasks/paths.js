const path = require('path');
const _ = require('lodash');

const projectCwd = process.cwd();

global.vfPath = {
  // 项目目录
  project: projectCwd,
  // 模块目录
  module: [path.join(__dirname, '../../node_modules'),path.join(__dirname, '../../web_modules')]
};

const paths = {
  cwd: projectCwd,
  // 源码目录
  src: {
    dir: './src',
    html: {
      partials: './src/html/partials/**/*.hbs',
      layouts: './src/html/layouts/**/*.hbs',
      pages: './src/html/pages/**/*.hbs'
    },
    cssBase: './src/css',
    css: './src/css/**/*.scss',
    imgBase: './src/img',
    img: './src/img/**/*.{jpg,png,gif,jpeg,JPG,PNG,GIF,JPEG}',
    spritePath: './src/sprite/',    //'./src/sprite/**/*.{png,PNG}'
    misc: './src/misc/**/*',
    data: './src/data/**/*'
  },
  // 开发预览目录
  dev: {
    dir: './dev',
    assets: './dev/assets',
    css: './dev/assets/css',
    spritePath: './dev/sprite/',
    html: './dev'
  },
  // 输出目录
  output: {
    dir: './output',
    assets: './output/assets',
    sprite: './output/assets/sprite',
    data: './output/assets/data',
    css: './output/assets/css',
    img: './output/assets/img',
    html: './output',
    all: './output/**/*',
    allSprite: './output/assets/sprite/**/*',
    allData: './output/assets/data/**/*'
  }

};

/*
  处理路径成绝对路径
 */
function processPath(value, key) {
  if (typeof value === 'object') {
    _.assign(value, _.mapValues(value, processPath));
  } else if (typeof value === 'string' && key !== 'cwd') {
    return path.join(projectCwd, value);
  }
  return value;
}

const absPaths = _.mapValues(paths, processPath);
// console.log(absPaths);

module.exports = absPaths;
