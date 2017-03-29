const program = require('commander');
const cmdPrompt = require('./lib/command/prompt');
const cmdWp = require('./lib/command/webpack');
const version = require('./package.json').version;


function run() {
	program
    .version(version);
    // .allowUnknownOption();

  	program
    .command('dev').alias('d').action(() => {
      	cmdWp('dev');
    });
    program.parse(process.argv);
  	if (!program.args.length) {
    	cmdPrompt();
  	}
}

module.exports = run;
