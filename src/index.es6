#!/usr/bin/env node
const exec = require('child_process').exec

const number = process.argv[2] || 10
const cmd = `history | awk '{print $2}' | sort | uniq -c | sort -r | head -n ${number}`

exec(`history | head -n ${number}`, {maxBuffer: 4096*4096}, (err, stdout, stderr) => {
   if (err) {
      console.error(`exec error: ${err}`)
      return
   }
   console.log(stdout)
   console.info(stderr)
})

