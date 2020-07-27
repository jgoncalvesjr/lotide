const findKeyByValue = (obj, value) => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (obj[i] === value) {
        return i;
      }
    }
  }
};

module.exports = findKeyByValue;