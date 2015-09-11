// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(p1) {
    try {
        process.env.debug = false; // for debugging purposes
        var p1 = p1 || process.argv[3] || undefined;
        return run(p1);
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()


// =========== [ MODULE EXPORT ] ===========
module.exports = task;
