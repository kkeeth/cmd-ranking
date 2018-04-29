#!/usr/bin/env node

const cmdrank = require('../lib/cmd-ranking')
const chalk = require('chalk')
const yargs = require('yargs')
   .usage( 'Usage:\n'
         + `${chalk.green.bold('  $0 [-c <number>] [--no-options]\n')}`
   )
   .example(`${chalk.green.bold('$0 -c 15 -n')}`)
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

