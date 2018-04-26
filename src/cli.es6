#!/usr/bin/env node

const package_json = require('../package.json')
const chalk = require('chalk')
const yargs = require('yargs')
   .usage( `${chalk.yellow.bold('Usage:\n')}`
         + `${chalk.yellow.bold('  cmdrank <number>\n\n')}`
   )
   .options({
      'v': {
         alias: 'version',
         describe: 'Show version'
      },
      'h': {
         alias: 'help',
         describe: 'Show help'
      }
   })
   .locale('en')

const argv = yargs.argv
