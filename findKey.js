const findKey = (obj, value) => {
  for (let i in obj) { // searches through object
    if (obj.hasOwnProperty(i)) {
      if (value(obj[i])) { // if value of callback property in object is true, returns i, i is the object key, obj[i] is object value
        return i;
      }
    }
  } 
}; // if callback value is never met, returns undefined

module.exports = findKey;