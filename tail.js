const assertEqual = (actual, expected) => {
  if (actual === expected) {
    return `🎉️🎉️🎉️ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `😭️😭️😭️ Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = args => {
  let result = [];
  if (args === [] || args.length === 1) {
    return result;
  } else {
    result = args.slice(1);
    return result;
  }
};

const test = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(test.length, 2)); // ensure we get back two elements
console.log(assertEqual(test[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(test[1], "Labs"));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

const test2 = tail([3]);
const test3 = tail([]);

console.log(assertEqual(test2.length, 1));
console.log(assertEqual(test3.length, 1));
console.log(test2);
console.log(test3);