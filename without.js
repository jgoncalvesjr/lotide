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

const without = (source, itemsToRemove) => {
  // create a clone of original array, so the source array isn't changed
  const output = [...source];
  // nested loop to iterate through new clone array
    for (let i = 0; i < output.length; i++) {
      for (let j = 0; j < itemsToRemove.length; j++) {
      // conditional to remove any existing elements
      if (output[i] === itemsToRemove[j]) {
        output.splice(i, 1);
      }
    }
  }
  return output;
}

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));