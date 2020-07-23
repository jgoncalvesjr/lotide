const assertArraysEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  const result = eqArrays(actual, expected);
  if (result) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = (a, b) => {
  // Array.isArray(a) - Array.isArray(b) - are both elements Arrays (.isArray) &&
  // a.length === b.length - are both elements Arrays with the same size (.length) &&
  // a.every((val, index) => val === b[index] - is every single element within the Arrays strictly equal (.every into function)
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};

const takeUntil = (array, callback) => {
  const results = []; // empty array to produce results
  for (const item of array) { // for of loop in array
    if (callback(item)) { // is item the same as callback criteria?
      return results; // if so, nothing to do, return results (empty array if callback is the first index)
    } else {
      results.push(item); // pushes item to result array
    }
  }
  return results; // if callback is never met, result array is the same as original array
};

// code sandbox

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1, 2, 3, 4, 5, 6, 7, 8];
const results3 = takeUntil(data3, x => x > 8);
console.log(results3);

console.log('---');

const data4 = [1, 2, 3, 4, 5, 6, 7, 8];
const results4 = takeUntil(data4, x => x > 0);
console.log(results4);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
console.log(assertArraysEqual(results3, data3));
console.log(assertArraysEqual(results4, []));