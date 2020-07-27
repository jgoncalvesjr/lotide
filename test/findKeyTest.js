// Transferred manual test content from original file

const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

const test1 = findKey(object, x => x.stars === 2);
const test2 = findKey(object, x => x.stars === 3);
const test3 = findKey(object, x => x.stars === undefined);

console.log(assertEqual(test1, "noma"));
console.log(assertEqual(test2, 'Akaleri'));
console.log(assertEqual(test3, undefined));