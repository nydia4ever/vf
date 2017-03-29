const paths = require('../tasks/paths');
const path = require('path');
const autoprefixer = require('autoprefixer');
const precss = require('precss');
//const postcssScss = require('postcss-scss');
const postcssImport = require('postcss-import');

const sprites = require('postcss-sprites');

var spriteOpts = {
	basePath: paths.src.dir,
	//stylesheetPath: paths.dev.css,
	spritePath: paths.dev.spritePath,
	filterBy: function(image) {
		// Allow only png files
		if (!/\.png$/.test(image.url)) {
			return Promise.reject();
		}

		return Promise.resolve();
	},
	groupBy: function(image) {
		
		var _group = path.dirname(image.url).replace(path.sep, '_');

		return Promise.resolve(_group);
	}
};


module.exports = {
    plugins: [
        /*postcssImport({
            glob: true,
            path: './src'
        }),*/
       	sprites(spriteOpts),
        precss()
        
        //autoprefixer({ browsers: [ 'last 2 versions' ] }),
    ]//,
    //parser: postcssScss
};

//global.vfPath.paths.src