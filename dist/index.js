#!/usr/bin/env node
'use strict';

var exec = require('child_process').exec;

var number = process.argv[2] || 10;
var cmd = 'history | awk \'{print $2}\' | sort | uniq -c | sort -r | head -n ' + number;

exec('history | head -n ' + number, { maxBuffer: 4096 * 4096 }, function (err, stdout, stderr) {
   if (err) {
      console.error('exec error: ' + err);
      return;
   }
   console.log(stdout);
   console.info(stderr);
});