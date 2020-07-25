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

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false));
console.log(assertEqual(eqArrays([1, 2, '3'], [1, 2, '3']), true));
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true)); // => true
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false)); // => false
console.log(assertEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false)); // => false