"use strict";

// console.log(process.argv.slice(2, 3));
var parseArgs = require("minimist");

var handleCommand = require("./handleCommand");

var command = parseArgs(process.argv.slice(2, 3));
delete command._;
handleCommand(command);