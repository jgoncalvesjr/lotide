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
  // Array.isArray(a) - Array.isArray(b) - are both elements Arrays (.isArray)
  // a.length === b.length - are both elements Arrays with the same size (.length)
  // a.every((val, index) => val === b[index] - is every single element within the Arrays strictly equal (.every into function)
  return Array.isArray(a) && Array.isArray(b) && a.length === b.length && a.every((val, index) => val === b[index]);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const nums = [2, 3, 4, 10, 20, 30]
const words = ["ground", "control", "to", "major", "tom"];
const words2 = [3, 4, 5, 6, 7];
const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num * 2);
const results3 = map(words2, word => word + 'AY');
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, [4, 6, 8, 20, 40, 60]));
console.log(assertArraysEqual(results3, ['3AY', '4AY', '5AY', '6AY', '7AY']));