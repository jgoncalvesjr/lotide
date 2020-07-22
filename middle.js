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

const middle = arr => {
  let output = [];
  if (!Array.isArray(arr) || arr.length >= 0 && arr.length < 3){
    return output;
  }
  if (arr.length % 2 === 1) {
    output.push(Math.ceil((arr.length/2)));
  } else {
    for (let i = (arr.length/2) - 1; i < (arr.length/2) + 1; i++) {
      output.push(arr[i]);
    }
  }
  return output;
}

console.log(middle([1, 2]));
console.log(middle([1]));
console.log(middle([]));
console.log(middle());
console.log(middle('a'));
console.log(middle(1));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 2, 3, 4, 5, 6, 7]));
console.log(middle([1, 2, 3, 4, 5, 6, 7, 8]));  
const test = middle([1, 2, 3, 4, 5, 6, 7, 8]);
const test2 = middle([1, 2, 3, 4, 5, 6, 7]);
console.log(assertArraysEqual(test, [4, 5]));  
console.log(assertArraysEqual(test2, [4]));  