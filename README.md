# Example of es6 module usage

Compiled with browserify and babelify to one file bundle.js

## Install

    npm i

## Run

    npm run dev

## Alternative to one build file is to use babel in browser, but node_modules/babel-core/browser.min.js is 1305 KB.
- https://github.com/ModuleLoader/es6-module-loader - 12.821 KB, addyosmani made 21 commits
- https://github.com/systemjs/systemjs - 40.457 kB
- https://github.com/caridy/es6-micro-loader

For Node we can use bootstrap.js from https://www.airpair.com/javascript/posts/using-es6-harmony-with-nodejs

	var System = require('es6-module-loader').System;

	System.import('./index').then(function(index) {
	    index.run(__dirname);
	}).catch(function(err){
	    console.log('err', err);
	});