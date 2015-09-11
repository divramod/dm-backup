var tasks = {};

// automatically add tasks here
tasks.diff = require("./tasks/diff/index.js").start;
tasks.sync = require("./tasks/sync/index.js").start;
tasks.exampleAsync = require("./tasks/exampleAsync/index.js").start;
tasks.exampleSync = require("./tasks/exampleSync/index.js").start;

module.exports = tasks;
