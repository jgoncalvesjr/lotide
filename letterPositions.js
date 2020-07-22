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

const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (!(sentence[i] === ' ')) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

console.log(letterPositions('hello  '));
console.log(letterPositions('lighthouse in the house'));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));
console.log(assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]));