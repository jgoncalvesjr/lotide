const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false));
console.log(assertEqual(eqArrays([1, 2, '3'], [1, 2, '3']), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)); // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)); // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)); // => false