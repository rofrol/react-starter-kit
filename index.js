// https://www.reddit.com/r/javascript/comments/332v73/is_anyone_using_es6_in_a_large_project_hows_it/cqh2u7i
import hex from 'hex-rgb'

console.log(hex('#abde13').map(function(x) { return x/255} ))