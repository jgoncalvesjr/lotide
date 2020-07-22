const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (eqObjects(actual, expected)) {
    return `${yea}${yea}${yea} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
  }
};

const eqArrays = (a, b) => {
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};

const eqObjects = (obj1, obj2) => {
  // extracts key array from objects, to ensure same key arrays are assembled
  const obj1KeysArr = Object.keys(obj1);
  const obj2KeysArr = Object.keys(obj2);
  if (!(obj1KeysArr.length === obj2KeysArr.length)) { // same key length?
    return false;
  } else {
    for (let obj1Key of obj1KeysArr) {
      if (!obj2[obj1Key]) {  // are keys equal?
        return false;
      }
      if (Array.isArray(obj1[obj1Key])) { // is the object value an array? If so, arrays must be compared instead of primitive values
        if (!eqArrays(obj1[obj1Key], obj2[obj1Key])) { // are arrays in values equal?
          return false;
        }
      } else {
        if (!(obj1[obj1Key] === obj2[obj1Key])) { // are primitive values equal?
          return false;
        }
      }
    }
    return true;
  }
};

const test1 = { a: "1", b: "2" };
const test2 = { b: "2", a: "1" };
const test3 = { a: "1", b: "2", c: "3" };
const test4 = { c: "3", a: "1", b: "3" };
const test5 = { x: "3", y: "1", z: "2" };
const test6 = { c: "1", d: ["2", 3] };
const test7 = { d: ["2", 3], c: "1" };
const test8 = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(test1, test2)); // true
console.log(assertObjectsEqual(test1, test3)); // false
console.log(assertObjectsEqual(test3, test4)); // false
console.log(assertObjectsEqual(test4, test5)); // false
console.log(assertObjectsEqual(test6, test7)); // true
console.log(assertObjectsEqual(test6, test8)); // false