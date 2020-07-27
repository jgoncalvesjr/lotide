// Transferred manual test content from original file

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [1, 2, 3, 4, 5, 6, 7, 8];
const results3 = takeUntil(data3, x => x > 8);
console.log(results3);

console.log('---');

const data4 = [1, 2, 3, 4, 5, 6, 7, 8];
const results4 = takeUntil(data4, x => x > 0);
console.log(results4);

console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));
console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
console.log(assertArraysEqual(results3, data3));
console.log(assertArraysEqual(results4, []));