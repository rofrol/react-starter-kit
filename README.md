# React starter kit

Stop the madness of learning new and fancy task runner/build system that comes every few months. Also use es6 modules.

You might be interested in [angular boilerplate](https://github.com/grillorafael/angular-boilerplate) which also uses npm as task runner.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [TODO](#todo)
- [Install](#install)
  - [Windows installation errors](#windows-installation-errors)
- [Run](#run)
- [Workflow](#workflow)
- [Design choices](#design-choices)
  - [browserify instead of asynchronous module loader](#browserify-instead-of-asynchronous-module-loader)
  - [npm scripts instead of gulp, grunt, webpack as a task runner/build system](#npm-scripts-instead-of-gulp-grunt-webpack-as-a-task-runnerbuild-system)
    - [How to use npm and browserify](#how-to-use-npm-and-browserify)
    - [Webstorm and source maps](#webstorm-and-source-maps)
  - [parallelshell](#parallelshell)
    - [parallelshell in cmd.exe](#parallelshell-in-cmdexe)
  - [npm scripts + browserify instead of webpack](#npm-scripts--browserify-instead-of-webpack)
  - [no global dependencies in package.json](#no-global-dependencies-in-packagejson)
  - [CSS and PostCSS](#css-and-postcss)
    - [Why not cssnext?](#why-not-cssnext)
    - [colorguard](#colorguard)
  - [NODE_ENV: production vs development](#node_env-production-vs-development)
    - [Windows](#windows)
    - [Best practices](#best-practices)
      - [Config format](#config-format)
    - [How to source variables into environment](#how-to-source-variables-into-environment)
      - [autoenv](#autoenv)
      - [Webstorm](#webstorm)
      - [*nix](#nix)
      - [Windows cmd.exe](#windows-cmdexe)
    - [Test it](#test-it)
    - [Babel](#babel)
  - [JSX](#jsx)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## TODO
- [x] es6 modules
- [x] babel to use es6
- [x] browserify to bundle modules
- [x] livereactload for hot reloading (with babel6)
- [x] uglifyify for minification
- [x] exorcist for external map files
- [x] npm scripts for task running
- [x] compile with browserify and babelify to one file `bundle.js`
- [x] no additional abstraction like grunt/gulp/webpack
- [x] [postcss](https://github.com/postcss/postcss)
- [x] [react-pacomo](https://github.com/unicorn-standard/react-pacomo) ~~[css modules](https://github.com/css-modules/css-modules)~~
- [ ] bundle splitting - [browserify for webpack users](https://gist.github.com/substack/68f8d502be42d5cd4942)
- [ ] isomorphic/universal/shared javascript with koa and flux/alt or [relay](https://github.com/relayjs/relay-starter-kit)
- [x] [eslint](https://github.com/eslint/eslint)
- [x] [editorconfig](http://editorconfig.org/)
- [x] license file
- [ ] tests using [mocha](https://github.com/mochajs/mocha)/[ava](https://github.com/sindresorhus/ava)/[react-unit](https://github.com/pzavolinsky/react-unit)
- [ ] some react router
- [ ] [react-simpletabs](http://react-components.com/component/react-simpletabs) or [khan components](https://khan.github.io/react-components/)
- [ ] [rollup as es6 module bundler](https://github.com/eventualbuddha/rollup-starter-project), [another rollup example](https://github.com/Rich-Harris/rollup-example-for-srcspider) - [source](https://github.com/mbostock/d3/issues/2220#issuecomment-112418053)
- [ ] flow or typescript
- [ ] process manager instead of http-server: [pm2](https://github.com/Unitech/pm2), [forever](https://github.com/foreverjs/forever), [nodemon](https://github.com/remy/nodemon)
- [x] NODE_ENV
- [x] css lint: [stylelint](https://github.com/stylelint/stylelint)
- [x] postcss-flexbugs-fixes
- [x] postcss colorguard


## Install

Clone this repo and inside the directory run

    npm i

### Windows installation errors

If you got error when building some native modules on Windows
- Install [Microsoft Build Tools 2013](http://www.microsoft.com/en-us/download/details.aspx?id=40760) ([No need for the entire visual studio)[http://stackoverflow.com/questions/14278417/cannot-install-node-modules-that-require-compilation-on-windows-7-x64-vs2012/31987161#31987161))
- [update internal node-gyp](https://github.com/nodejs/node-gyp/wiki/Updating-npm's-bundled-node-gyp) (don't just install it globally)
- Set [msvs_version](http://stackoverflow.com/questions/14180012/npm-install-for-some-packages-sqlite3-socket-io-fail-with-error-msb8020-on-wi/22120966#22120966) if you have more than one version of compiler installed

More about it:
- http://stackoverflow.com/questions/20051318/npm-native-builds-with-only-visual-studio-2013-installed
- [node-gyp versions](https://github.com/nodejs/node-gyp/blob/master/gyp/pylib/gyp/MSVSVersion.py)
- https://github.com/nodejs/node-gyp

## Run

    npm run dev

## Workflow

- Open your browser at [http://localhost:8888](http://localhost:8888).
- Edit index.js, i.e. add another input, save
- Watch how content in the browser changes without refreshing browser, thanks to livereactload.

## Design choices

### browserify instead of asynchronous module loader

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

### npm scripts instead of gulp, grunt, webpack as a task runner/build system

- http://blog.keithcirkel.co.uk/why-we-should-stop-using-grunt/
- https://github.com/mattdesl/module-best-practices#task-running
  - https://github.com/tomekwi/elm-live/issues/70#issuecomment-262691943

> no need for grunt/gulp/gloop/glugle/gleffy/gloran/whatever task runner comes out next week
>
> — <quote>[_facildeabrir](https://www.reddit.com/r/javascript/comments/2ggc1i/whats_a_nice_clean_and_modern_workflow_for/ckj89rr)</quote>

#### How to use npm and browserify

- http://blog.keithcirkel.co.uk/how-to-use-npm-as-a-build-tool/
- http://blog.modulus.io/using-npm-scripts-to-build-asset-pipeline
- http://substack.net/task_automation_with_npm_run
- http://learnjs.io/blog/2014/02/06/creating-js-library-builds-with-browserify-and-other-npm-modules/

#### Webstorm and source maps

> I (with some help) found a work-arround for successfully using browserify source maps from IntelliJ:
> http://stackoverflow.com/questions/31070112/enable-javascript-debugging-with-intellij-and-source-maps

https://github.com/substack/node-browserify/issues/1233#issuecomment-123302577

### Run commands concurrently

- [cmd.exe doesn't support &](https://github.com/npm/npm/issues/8358)

Use `concurrently`, `parallelshell` failed me on hackwaw. There is also `npm-run-all`.

`npm i concurrently`

On Windows you need to use double-quotes to avoid confusing the argument parser:

```javascript
  "scripts": {
    "dev": "concurrently \"npm run watch\" \"npm run reactload\" \"npm run http-server\""
  },
```

Use `--raw` to preserve colors.

http://stackoverflow.com/questions/30950032/how-can-i-run-multiple-npm-scripts-in-parallel

### npm scripts + browserify instead of webpack

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

### no global dependencies in package.json

- http://www.joezimjs.com/javascript/no-more-global-npm-packages/
- http://stackoverflow.com/questions/14657170/installing-global-npm-dependencies-via-package-json/14657796#14657796

To use local dependencies in command line, alias it in package.json

```javascript
"scripts": {
    "http-server": "http-server"
}
```

And then use it like this `npm run http-server` or use without aliasing first `node_modules/.bin/http-server`.

### CSS and PostCSS

- https://medium.com/@ddprrt/postcss-misconceptions-faf5dc5038df
- http://www.sitepoint.com/postcss-mythbusting/
- Atom plugin for linter https://github.com/AtomLinter/linter-stylelint

#### Why not cssnext?

> it's time to think about [deprecating](https://github.com/postcss/postcss/issues/477) [cssnext](https://github.com/cssnext/cssnext/issues/208)

In the future [postcss-cli will not be needed](https://github.com/postcss/postcss/issues/477), cmd line will be included in postcss.

#### colorguard

Remeber to use colorguard before postcss-custom-properties, because when you have unused properties with colors, they will be stripped out and you won't see any warnings.

### NODE_ENV: production vs development

#### Windows

You can set `NODE_ENV` on windows as well:

```
set NODE_ENV=production
npm run env:windows
```

Or using npm scripts (don't put space before `&&`):

```
"env:windows": "set NODE_ENV=development&& node env.js",
```

#### Best practices

Use environmental variables rather than config file with grouping, because that is more language-independent and scales better when you add more deploys over app lifetime.
http://12factor.net/config

Also don't set `NODE_ENV` to any default like [this](http://stackoverflow.com/questions/11104028/process-env-node-env-is-undefined/31611428#31611428):

```
var environment = process.env.NODE_ENV || 'development';
```

because either development code and env shouldn't be exposed or development code could mangle with production database, etc.
https://www.reddit.com/r/node/comments/3e9f2f/processenvnode_env_undefined_should_it_default_to/.

Use prefix so you won't use some variable from different environment, i.e. previously you could set `database=some_url`.
With prefix it would be `development_database`. Then read it in your application like this:

```javascript
var database = process.env[process.env.NODE_ENV + '_database'];
```

It's better to source variables from command line or with node options then with some starting javascript file, because some tools like babel can use those env variables. If you use npm scripts that's prefered way.

##### Config format

.env
```
NODE_ENV=development
development_database=da
development_token=1231234123551341
```

Warning! Ensure there are unix line endings in `.env` or there may be problems.

#### How to source variables into environment

##### autoenv

https://github.com/kennethreitz/autoenv

##### Webstorm

In Webstorm11 there is a plugin for npm. Click `gear icon > npm Settings`. You can set single variables like NODE_ENV but it's better to source it from file using [dotenv](https://github.com/motdotla/dotenv).

```
npm i --save-dev dotenv
```

Then in webstorm npm settings set `Node options` to `-r dotenv/config`.

By default it will read from `.env` file.

##### \*nix

source it using script `env.sh` from this repository:
```
source env.sh
```

##### Windows cmd.exe

source it using script `env.bat` from this repository:
```
.\env.bat
```

#### Test it

Run it from console:

```
$ npm run check_env

> react-starter-kit@0.0.0 check_env C:\Users\frolow\projects\react-starter-kit
> node check_env.js

process.env.NODE_ENV: development
database: da
```

or from Webstorm npm plugin.

#### Babel

> It is up to you to ensure that the transform is not enabled when you compile the app in production mode.
> The easiest way to do this is to put React Transform configuration inside env.development in .babelrc
> and ensure you’re calling babel with NODE_ENV=production.
> See babelrc documentation for more details about using env option.
>
> https://github.com/gaearon/react-transform-hmr

### JSX

If you use jsx, you have to explicitly import react.

There are two rules in eslint that may be confusing:
- Prevent missing React when using JSX https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
- This option is deprecated, please use the shared settings to specify a custom pragma. If you are using the @jsx pragma this rule will mark the designated variable and not the React one https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md

To specify custom pragma:

```
'plugins': [
  'react'
],
"settings": {
  "react": {
    "pragma": "hJSX",  // Pragma to use, default to "React"
  }
},
"parser": "babel-eslint",
```

https://github.com/yannickcr/eslint-plugin-react/blob/master/README.md#configuration
