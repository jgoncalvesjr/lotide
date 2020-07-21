const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = args => {
  let result;
  if (args === []) {
    return undefined;
  } else {
    result = args.shift();
    return result;
  }
};

console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([]), "Hello"));
console.log(assertEqual(head([3]), "Hello"));
console.log(assertEqual(head(['Hello', 3, 234234, 'lolol']), "Hello"));