// https://www.reddit.com/r/javascript/comments/332v73/is_anyone_using_es6_in_a_large_project_hows_it/cqh2u7i
export function run(appdir) {
	console.log('run');
	System.import('node_modules/hex-rgb/index.js').then(function(hex) {
		console.log(hex('#abde13').map(function(x) { return x/255} ))
	});
}

run()