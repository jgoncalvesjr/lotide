const takeUntil = (array, callback) => {
  const results = []; // empty array to produce results
  for (const item of array) { // for of loop in array
    if (callback(item)) { // is item the same as callback criteria?
      return results; // if so, nothing to do, return results (empty array if callback is the first index)
    } else {
      results.push(item); // pushes item to result array
    }
  }
  return results; // if callback is never met, result array is the same as original array
};

module.exports = takeUntil;