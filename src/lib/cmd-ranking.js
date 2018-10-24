const pkg   = require('../package.json')
const argv  = require('./argv')
const yargs = require('yargs')
const exec  = require('child_process').execSync
const DEFAULT_BASH  = 'bash'
const DEFAULT_COUNT = 10

/**
 * run function
 *
 * @param  void
 * @return void
 */
function run() {
   // 'help' is top priority option
   if (argv.h) {
      show_help()
   }
   else if (argv.v) {
      console.log(pkg.version)
   }
   else if (argv.c && typeof argv.c !== 'number') {
      show_help("Please specify the number of lines to display.\n")
   }
   else {
      const shell = get_shell()
      const rank  = get_rank(shell)

      console.log(rank)
   }
}

/**
 * show help
 *
 * @param  {String} help message if specifying a message
 * @return {String} full help message
 */
function show_help(text) {
   if (text) console.log(text)
   yargs.showHelp()
}

/**
 * get current shell
 *
 * @param  void
 * @return {String} current shell name
 */
function get_shell() {
   return exec("basename $SHELL").toString().replace(/\r?\n/g, "") || DEFAULT_BASH
}

/**
 * get command ranking
 *
 * @param  {String} current shell name
 * @return {String} command ranking
 */
function get_rank(shell) {
   const number = argv.c || DEFAULT_COUNT
   const REST_CMD = `sort | uniq -c | sort -r | head -n ${number}`
   let get_rank_cmd = ''

   switch (shell) {
      case 'zsh':
         get_rank_cmd = "cat ~/.zsh_history | LC_ALL=C cut -f 2- -d ';'"
         break;
      case 'sh':
         get_rank_cmd = "cat ~/.sh_history"
         break;
      case 'bash':
      default:
         get_rank_cmd = "cat ~/.bash_history"
         break;
   }

   if (!argv.o) {
      get_rank_cmd += " | awk '{print $1}'"
   }
   get_rank_cmd += " | perl -pe 's/[^\\x00-\\x7F]+//g' | " + REST_CMD

   // get history ranking
   return exec(get_rank_cmd).toString()
}

module.exports = {
   run: run
}

