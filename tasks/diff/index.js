// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(folder1, folder2) {
    try {
        process.env.debug = false; // for debugging purposes
        var folder1 = folder1 || undefined;
        var folder2 = folder2 || undefined;
        var command = "diff -qr --suppress-common-lines " + folder1 + " " + folder2;
        //var command = "rsync -avun --delete " + folder2 + " " + folder1 + ' | grep "delete" ';
        //console.log(command);
        spawn(command);

        return "";
    } catch (e) {
        if (process.env.debug === "true") {
            console.log("Filename: ", __filename, "\n", e.stack);
        }
        return e;
    }
}; // task.start()


// =========== [ MODULE EXPORT ] ===========
module.exports = task;
