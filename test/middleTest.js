const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')

console.log(middle([1, 2]));
console.log(middle([1]));
console.log(middle([]));
console.log(middle());
console.log(middle('a'));
console.log(middle(1));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));  
const test = middle([1, 2, 3, 4, 5, 6, 7, 8]);
const test2 = middle([1, 2, 3, 4, 5, 6, 7]);
console.log(assertArraysEqual(test, [4, 5]));  
console.log(assertArraysEqual(test2, [4]));  