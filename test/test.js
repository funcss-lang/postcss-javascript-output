var postcss = require('postcss');
var expect  = require('chai').expect;

var plugin = require('../');

var hello = postcss.plugin('postcss-hello', function () {
    return function (css, result) {
        result.addJS('console.log("Hello World!");');
    };
});

var test = function (input, output, js, plugins, done) {
    postcss(plugins).process(input).then(function (result) {
        expect(result.css).to.eql(output);
        expect(result.js).to.eql(js);
        expect(result.warnings()).to.be.empty;
        done();
    }).catch(function (error) {
        done(error);
    });
};

describe('postcss-javascript-output', function () {

    it('does not add javascript if not needed', function(done) {
        test('a{}', 'a{}', undefined, [plugin()], done);
    });

    it('can add javascript', function(done) {
        test('a{}', 'a{}', 'console.log("Hello World!");\n',
                [plugin(), hello()], done);
    });

});
