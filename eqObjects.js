const eqArrays = require('./eqArrays');

const eqObjects = (obj1, obj2) => {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) { // if objects don't have the same key length, false
    return false;
  } else {
    for (let key in obj1) {
      if (Array.isArray(obj1[key])) { // if object keys are arrays, verify array elements
        if (eqArrays(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (typeof obj1[key] === 'object') { // if object key is object, verify recursively
        if (eqObjects(obj1[key], obj2[key]) === false) {
          return false;
        }
      } else if (obj1[key] !== obj2[key]) { // if none are met, primitive value check only
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;