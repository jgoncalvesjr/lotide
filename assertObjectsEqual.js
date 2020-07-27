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
/*
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
*/

module.exports = assertObjectsEqual;