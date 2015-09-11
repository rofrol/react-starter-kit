# React starter kit

Uses es6 modules, babel to use es6, browserify to bundle modules, livereactload for hot reloading.

Compiled with browserify and babelify to one file bundle.js

Install

    npm i

Run

    npm run dev
    
## Why x instead of y?

### Why browserify instead of asynchronous module loader?

Because you need full runtime when using jspm or others.

Alternative to one build file is to use babel in browser, but node_modules/babel-core/browser.min.js is 1305 KB.
- https://github.com/ModuleLoader/es6-module-loader - 12.821 KB, addyosmani made 21 commits
- https://github.com/systemjs/systemjs - 40.457 kB
- https://github.com/caridy/es6-micro-loader
- Seed project for ES6 modules via SystemJS with ES6 syntax using Babel that lazy-load and bundle build with AngularJS https://github.com/Swimlane/angular-systemjs-seed

For Node we can use bootstrap.js from https://www.airpair.com/javascript/posts/using-es6-harmony-with-nodejs

```javascript
var System = require('es6-module-loader').System;

System.import('./index').then(function(index) {
    index.run(__dirname);
}).catch(function(err){
    console.log('err', err);
});
```

### Why npm scripts instead of gulp, grunt, webpack as a task runner/build system?

http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/

#### How to use npm and browserify

- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- http://blog.modulus.io/using-npm-scripts-to-build-asset-pipeline
- http://substack.net/task_automation_with_npm_run
- http://learnjs.io/blog/2014/02/06/creating-js-library-builds-with-browserify-and-other-npm-modules/

### Why parallelshell?

- [cmd.exe doesn't support &](https://github.com/npm/npm/issues/8358)

#### How to use parallelshell

- on Windows, you need to use double-quotes to avoid confusing the argument parser

### Why npm scripts + browserify instead of webpack?

> Webpack seems like an amazing tool, and does present some great features (hot module replacement, code splitting, sync vs. async requires, etc). However, it does not promote code re-use in the way that NPM and Browserify does. It encourages a “whole new way” of writing modules and often requires manually-maintained config files. - http://mattdesl.svbtle.com/browserify-vs-webpack

- [css modules](https://github.com/css-modules/css-modules) gives what webpack gives in future standard compliant way thanks to postcss
- [browesrify + css modules](https://github.com/css-modules/browserify-demo)
- [browserify for webpack users](https://gist.github.com/substack/68f8d502be42d5cd4942)
