#!/usr/bin/env node
"use strict";

var args = process.argv.slice(2);

function sum(args) {
    return args.reduce(function (sum, v) {
        return sum + Number(v);
    }, 0);
}

console.log(sum(args));