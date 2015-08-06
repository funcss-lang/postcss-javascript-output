var postcss = require('postcss');

module.exports = postcss.plugin('postcss-javascript-output', function (opts) {
    opts = opts || {};
    
    // Work with options here

    return function (css, result) {
        result.js = 

        // Transform CSS AST here

    };
});
