#!/usr/bin/env node

const cmdrank = require('../lib/cmd-ranking')
const chalk = require('chalk')
const yargs = require('yargs')
   .usage( `${chalk.yellow.bold('Usage:\n')}`
         + `${chalk.yellow.bold('  cmdrank <number>\n\n')}`
   )
   .options({
      'c': {
         alias: 'count',
         describe: 'Show rank count'
      },
      'n': {
         alias: 'no-options',
         describe: 'Command name only'
      },
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

cmdrank.run()

