module.exports = {

  project: {
    // 版本 hash 配置
    // Type: boolean, object
    // 配置为对象时，则为选项，具体见 https://github.com/smysnk/gulp-rev-all#options
    rev: true,

    // 自动刷新开关
    // Type: boolean
    reload: true,

    // 调试信息开关
    // Type: boolean
    debug: false,

    // browser sync 的选项，具体见 https://www.browsersync.io/docs/options
    // Type: object
    bs: {
      // 例如可配置本地开发服务器端口
      // port: 3000
    }
  },

  html: {
    // htmlmin 配置（高级使用时可配，仅 output 模式下生效）
    // Type: object
    // 具体见 https://github.com/kangax/html-minifier#options-quick-reference
    htmlmin: null
  },

  css: {

    // px 转换成 rem（rem 布局，一般移动端用）
    // Type: boolean, number, object
    // 配置为数字时，则为转换基数，默认基数为 75（for 750px 设计稿）。如果设计稿为 640px，请改为 64。
    // 配置为对象时，则为选项，具体见 https://github.com/cuth/postcss-pxtorem#options
    px2rem: false,

    // 自动浏览器前缀
    // Type: boolean, object
    // 可配置为选项对象，具体见 https://github.com/postcss/autoprefixer#options
    autoprefixer: false,

    // cssnano 配置（高级使用时可配，仅 output 模式下生效）
    // Type: object
    // 具体见 http://cssnano.co/optimisations/
    cssnano: null
  },

  img: {

    // pngquant 压缩（某些情况下可能会失真）
    // Type: boolean, object
    // 可配置为选项对象，具体见 https://github.com/imagemin/imagemin-pngquant#api
    pngquant: true
  },

  js: {
    // webpack 处理资源（css、png 等等）
    // Type: boolean
    assets: false,

    // 生产模式是否输出 console
    // Type: boolean
    console: false,

    // 是否使用 babel
    // Type: boolean
    babel: false,

    // 是否使用 ESLint
    // Type: boolean
    eslint: true
  },

  webpack: {
    // 代码分割，按目录分割，使用 CommonsChunkPlugin 插件
    // 一个目录会分割成一个 js 文件，例如 ['common', 'vendor'] 会分割成 common.js 和 vendor.js
    // 注意在 html 里添加对应 js 文件的 script 标签，script 加载顺序和 split 数组顺序相反。请注意，顺序相反。
    split: [],

    // 全局对象映射，使用 ProvidePlugin 插件
    // 例如配置成 {$: 'jquery'}，在模块里就可以不用 var $ = require('jquery') 而直接使用 $ 了。
    provide: {}
  }
};
