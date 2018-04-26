#!/usr/bin/env node
'use strict';

var exec = require('child_process').exec;

var number = process.argv[2] || 10;
var cmd = 'cat ~/.bash_history | sort | uniq -c | sort -r | head -n ' + number;

exec(cmd, function (err, stdout, stderr) {
   if (err) {
      console.error('exec error: ' + err);
      return;
   }
   if (stderr) {
      console.info(stderr);
      return;
   }
   console.log(stdout);
});