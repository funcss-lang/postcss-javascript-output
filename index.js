var postcss = require('postcss');

module.exports = postcss.plugin('postcss-javascript-output', function () {
    return function (css, result) {
        result.addJS = function(fragment) {
            if (typeof this.js === "undefined") this.js = "";
            this.js += fragment;
        }
    };
});
