const assertEqual = require('../assertEqual');

console.log(assertEqual('Lighthouse Labs', 'Bootcamp'));
console.log(assertEqual(1, 1));
console.log(assertEqual('bootcamp', 'Bootcamp'));
console.log(assertEqual('Bootcamp', 'Bootcamp'));
console.log(assertEqual(1, '1'));
console.log(assertEqual(null, undefined));