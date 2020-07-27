const assertArraysEqual = require('../assertArraysEqual')

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, '3']));
console.log(assertArraysEqual([1, 2, 3], [1, 2]));
console.log(assertArraysEqual([1, 2, 3], [1, 2, 'xablau']));
console.log(assertArraysEqual([1, 2, 'xablau'], [1, 2, 'xablau']));
console.log(assertArraysEqual([], [1, 2, 'xablau']));
console.log(assertArraysEqual(null, [1, 2, 3]));