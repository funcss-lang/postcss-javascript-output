# PostCSS Javascript Output [![Build Status][ci-img]][ci]

[PostCSS] plugin that can be used by other plugins for outputting JavaScript code.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/cie/postcss-javascript-output.svg
[ci]:      https://travis-ci.org/cie/postcss-javascript-output

```css
.foo {
    /* Input example */
}
```

```css
.foo {
  /* Output example */
}
```

## Usage

```js
postcss([ require('postcss-javascript-output') ])
```

See [PostCSS] docs for examples for your environment.
