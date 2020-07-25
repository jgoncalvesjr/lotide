const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { // arrays have same length?
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) { // if both elements in arrays are arrays
      if (!eqArrays(arr1[i], arr2[i])) { // verify content equality recursively
        return false;
      }
    } else if (!(arr1[i] === arr2[i])) { // else, verify them separately
      return false;
    }
  }
  return true;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { // if objects don't have the same key length, false
    return false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) { // if object keys are arrays, verify array elements
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (typeof obj1[key] === 'object') { // if object key is object, verify recursively
        if (eqObjects(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) { // if none are met, primitive value check only
        return false;
      }
    }
  }
  return true;
};

const test1 = { a: "1", b: "2" };
const test2 = { b: "2", a: "1" };
const test3 = { a: "1", b: "2", c: "3" };
const test4 = { c: "3", a: "1", b: "3" };
const test5 = { x: "3", y: "1", z: "2" };
const test6 = { c: "1", d: ["2", 3] };
const test7 = { d: ["2", 3], c: "1" };
const test8 = { c: "1", d: ["2", 3, 4] };
const test9 = { a: { z: 1 }, b: 2 };
const test10 = { a: { y: 0, z: 1 }, b: 2 };
const test11 = { a: 1, b: 2 };
const test12 = { a: { z: 1, y: 0 }, b: 2 };


console.log(assertEqual(eqObjects(test9, test9), true));
console.log(assertEqual(eqObjects(test1, test11), false));
console.log(assertEqual(eqObjects(test10, test11), false));
console.log(assertEqual(eqObjects(test10, test12), true));
console.log(assertEqual(eqObjects(test1, test2), true));
console.log(assertEqual(eqObjects(test1, test3), false));
console.log(assertEqual(eqObjects(test3, test4), false));
console.log(assertEqual(eqObjects(test4, test5), false));
console.log(assertEqual(eqObjects(test6, test7), true));
console.log(assertEqual(eqObjects(test6, test8), false));