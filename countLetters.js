const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

// letters: a string containing the letters
// whitespaces should NOT be counted
const countLetters = letters => {
  const results = {};
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
      } else if (!(letter === ' ')) {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters('Test of thE yEar');

console.log(countLetters('Test of thE yEar'));

console.log(assertEqual(result1["t"], 2));
console.log(assertEqual(result1[" "], undefined));
console.log(assertEqual(result1["e"], 1));