#!/usr/bin/env node
const exec = require('child_process').exec

const number = process.argv[2] || 10
const cmd = `cat ~/.bash_history | sort | uniq -c | sort -r | head -n ${number}`

exec(cmd, (err, stdout, stderr) => {
   if (err) {
      console.error(`exec error: ${err}`)
      return
   }
   console.log(stdout)
   console.info(stderr)
})

