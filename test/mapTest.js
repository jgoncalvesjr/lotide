// Transferred manual test content from original file

const nums = [2, 3, 4, 10, 20, 30]
const words = ["ground", "control", "to", "major", "tom"];
const words2 = [3, 4, 5, 6, 7];
const results1 = map(words, word => word[0]);
const results2 = map(nums, num => num * 2);
const results3 = map(words2, word => word + 'AY');
console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']));
console.log(assertArraysEqual(results2, [4, 6, 8, 20, 40, 60]));
console.log(assertArraysEqual(results3, ['3AY', '4AY', '5AY', '6AY', '7AY']));