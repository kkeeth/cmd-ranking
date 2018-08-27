'use strict';

var chalk = require('chalk');
module.exports = require('yargs').usage('Usage:\n' + ('' + chalk.green.bold('  $0 [-c <number>] [--options]\n'))).example('' + chalk.green.bold('$0 -c 15 -n')).options({
   'c': {
      alias: 'count',
      describe: 'Show rank count'
   },
   'o': {
      alias: 'options',
      describe: 'Command with optinos'
   },
   'v': {
      alias: 'version',
      describe: 'Show version'
   },
   'h': {
      alias: 'help',
      describe: 'Show help'
   }
}).locale('en').argv;