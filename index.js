var postcss = require('postcss');

function JS() {
   this.fragments = []; 
}

JS.prototype.toString = function() {
    return this.fragments.join("\n");
};

JS.prototype.append = function(f) {
    this.fragments.push(f);
    return this;
};

JS.prototype.prepend = function(f) {
    this.fragments.unshift(f);
    return this;
};

module.exports = postcss.plugin('postcss-javascript-output', function (opts) {
    opts = opts || {};
    
    // Work with options here

    return function (css, result) {
        result.js = new JS;
    };
});
