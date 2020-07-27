const head = require('../head');
const assertEqual = require('../assertEqual');

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), "Hello"));
console.log(assertEqual(head([3]), "Hello"));
console.log(assertEqual(head(['Hello', 3, 234234, 'lolol']), "Hello"));