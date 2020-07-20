const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😭️😭️😭️ Assertion Failed: ${actual} !== ${expected}`;
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