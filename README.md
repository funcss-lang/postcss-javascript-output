# PostCSS Javascript Output [![Build Status][ci-img]][ci]

[PostCSS] plugin that can be used by other plugins for outputting JavaScript code.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/funcss-lang/postcss-javascript-output.svg
[ci]:      https://travis-ci.org/funcss-lang/postcss-javascript-output

`postcss-javascript-output` enables you to write plugins like this:

```js
module.exports = postcss.plugin('postcss-helloworld', function () {
    return function (css, result) {
        result.addJS("console.log('Hello world')");
    };
});
```

## Usage

```js
var postcss = require('postcss');
postcss([ require('postcss-javascript-output')(), require('postcss-helloworld')() ])
    .process(css, { from: 'src/app.css', to: 'app.css' })
    .then(function (result) {
        fs.writeFileSync('app.css', result.css);
        if ( result.js ) fs.writeFileSync('app.js', result.js);
        if ( result.map ) fs.writeFileSync('app.css.map', result.map);
    });
```

See [PostCSS] docs for examples for your environment.
