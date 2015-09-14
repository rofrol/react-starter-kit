# React starter kit

Stop the madness of learning new and fancy task runner/build system that comes every few months. Also use es6 modules.

You may also look at [angular boilerplate](https://github.com/grillorafael/angular-boilerplate), which also uses npm as task runner.

## TODO
- [x] es6 modules
- [x] babel to use es6
- [x] browserify to bundle modules
- [x] livereactload for hot reloading
- [x] uglifyify for minification
- [x] exorcist for external map files
- [x] npm scripts for task running
- [x] compile with browserify and babelify to one file `bundle.js`
- [x] no additional abstraction like grunt/gulp/webpack
- [ ] [postcss](https://github.com/postcss/postcss)
- [ ] [css modules](https://github.com/css-modules/css-modules)
- [ ] bundle splitting - [browserify for webpack users](https://gist.github.com/substack/68f8d502be42d5cd4942)
- [ ] isomorphic/universal/shared javascript with koa and flux/alt or [relay](https://github.com/relayjs/relay-starter-kit)
- [ ] [eslint](https://github.com/eslint/eslint)
- [ ] [editorconfig](http://editorconfig.org/)
- [x] license file
- [ ] tests using [mocha](https://github.com/mochajs/mocha)/[ava](https://github.com/sindresorhus/ava)/[react-unit](https://github.com/pzavolinsky/react-unit)
- [ ] some react router
- [ ] [react-simpletabs](http://react-components.com/component/react-simpletabs) or [khan components](https://khan.github.io/react-components/)
- [ ] [rollup as es6 module bundler](https://github.com/eventualbuddha/rollup-starter-project), [another rollup example](https://github.com/Rich-Harris/rollup-example-for-srcspider) - [source](https://github.com/mbostock/d3/issues/2220#issuecomment-112418053)
- [ ] flow or typescript
- [ ] process manager instead of http-server: [pm2](https://github.com/Unitech/pm2), [forever](https://github.com/foreverjs/forever), [nodemon](https://github.com/remy/nodemon)


## Install

Install python for livehotreload

    npm i

## Run

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

> no need for grunt/gulp/gloop/glugle/gleffy/gloran/whatever task runner comes out next week
>
> — <quote>[_facildeabrir](https://www.reddit.com/r/javascript/comments/2ggc1i/whats_a_nice_clean_and_modern_workflow_for/ckj89rr)</quote>

#### How to use npm and browserify

- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- http://blog.modulus.io/using-npm-scripts-to-build-asset-pipeline
- http://substack.net/task_automation_with_npm_run
- http://learnjs.io/blog/2014/02/06/creating-js-library-builds-with-browserify-and-other-npm-modules/

### Why parallelshell?

- [cmd.exe doesn't support &](https://github.com/npm/npm/issues/8358)

#### parallelshell in cmd.exe

On Windows you need to use double-quotes to avoid confusing the argument parser:

```javascript
  "scripts": {
    "dev": "parallelshell \"npm run watch\" \"npm run reactload\" \"npm run http-server\""
  },
```


### Why npm scripts + browserify instead of webpack?

> Webpack seems like an amazing tool, and does present some great features (hot module replacement, code splitting, sync vs. async requires, etc). However, it does not promote code re-use in the way that NPM and Browserify does. It encourages a “whole new way” of writing modules and often requires manually-maintained config files. - http://mattdesl.svbtle.com/browserify-vs-webpack

<!-- -->
> Browserify can do all of that with just a few commands or plugins. And be way less verbose too.
> - Split files? The factor-bundle plugin.
> - Watch files? Watchify or many many other options.
> - Compile to JS? Plugins - Babel or CoffeeScript are really common.
> - CSS? Yup, browserify-css plugin for that.
> - Feature flags? Yup, plus it doesn't use a non-standard syntax but instead process.env flags. Envify is much nicer of a solution.
> - Multiple Entry points? See point 1. Easy.
> - Optimizing common code. Same as before. Factor-bundle takes care of it.
>
> [Source](https://www.reddit.com/r/reactjs/comments/3kaysq/webpack_is_such_a_cool_tool_see_how_instgram_uses/cuw5ojv)

- [css modules](https://github.com/css-modules/css-modules) gives what webpack gives in future standard compliant way thanks to postcss
- [browesrify + css modules](https://github.com/css-modules/browserify-demo)
- [browserify for webpack users](https://gist.github.com/substack/68f8d502be42d5cd4942)

### Why no global dependencies in package.json?

- http://www.joezimjs.com/javascript/no-more-global-npm-packages/
- http://stackoverflow.com/questions/14657170/installing-global-npm-dependencies-via-package-json/14657796#14657796

To use local dependencies in command line, alias it in package.json

```javascript
"scripts": {
    "http-server": "http-server"
}
```

And then use it like this `npm run http-server` or use without aliasing first `node_modules/.bin/http-server`.
