const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;