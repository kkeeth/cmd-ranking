#!/usr/bin/env node
'use strict';

var package_json = require('../package.json');
var chalk = require('chalk');
var yargs = require('yargs').usage('' + chalk.yellow.bold('Usage:\n') + ('' + chalk.yellow.bold('  cmdrnk <number>\n\n'))).options({
   'v': {
      alias: 'version',
      describe: 'Show version'
   },
   'h': {
      alias: 'help',
      describe: 'Show help'
   }
}).locale('en');

var argv = yargs.argv;