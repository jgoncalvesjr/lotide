const without = (source, itemsToRemove) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    let remove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        remove = true;
      }
    }
    if (!remove) {
      result.push(source[i]);
    }
  }
  return result;
};

module.exports = without;