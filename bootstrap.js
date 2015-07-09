console.log('bootstrap');
var System = require('es6-module-loader').System;

System.import('./index.js').then(function(index) {
	console.log('then');
    index.run(__dirname);
}).catch(function(err){
    console.log('err', err);
});