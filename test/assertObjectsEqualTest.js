// Transferred manual test content from original file

const test1 = { a: "1", b: "2" };
const test2 = { b: "2", a: "1" };
const test3 = { a: "1", b: "2", c: "3" };
const test4 = { c: "3", a: "1", b: "3" };
const test5 = { x: "3", y: "1", z: "2" };
const test6 = { c: "1", d: ["2", 3] };
const test7 = { d: ["2", 3], c: "1" };
const test8 = { c: "1", d: ["2", 3, 4] };

console.log(assertObjectsEqual(test1, test2)); // true
console.log(assertObjectsEqual(test1, test3)); // false
console.log(assertObjectsEqual(test3, test4)); // false
console.log(assertObjectsEqual(test4, test5)); // false
console.log(assertObjectsEqual(test6, test7)); // true
console.log(assertObjectsEqual(test6, test8)); // false