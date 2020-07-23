const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKey = (obj, value) => {
  for (let i in obj) { // searches through object
    if (obj.hasOwnProperty(i)) {
      if (value(obj[i])) { // if value of callback property in object is true, returns i, i is the object key, obj[i] is object value
        return i;
      }
    }
  } 
}; // if callback value is never met, returns undefined

// code sandbox

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
