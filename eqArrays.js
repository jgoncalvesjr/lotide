const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) { // arrays have same length?
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) { // if both elements in arrays are arrays
      if (!eqArrays(arr1[i], arr2[i])) { // verify content equality recursively
        return false;
      }
    } else if (!(arr1[i] === arr2[i])) { // else, verify them separately
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;