var should = require('chai').should();
var expect = require('chai').expect;
var colors = require("colors");

// =========== [ dm-file TESTS ] ===========
describe('diff sync'.red, function() {

    // =========== [ start ] ===========
    it('success: should ...', function success() {
        var result = require('./../index.js').start(__dirname + "/dir1", __dirname + "/dir2");
        result.should.equal("diff");
    });

    // =========== [ start ] ===========
    it('error: should ...', function error() {
        console.log(process.argv);
        var result = require('./../index.js').start(__dirname + "/dir1", __dirname + "/dir2");
        result.should.equal("falsediff");
    });

});
