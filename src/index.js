#!/usr/bin/env node
"use strict";

var exec = require('child_process').exec;

exec("history 10 | awk '{print $2}'", function (err, stdout, stderr) {
  console.log(stdout);
});