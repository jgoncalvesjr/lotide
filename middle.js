const middle = arr => {
  let output = [];
  if (!Array.isArray(arr) || arr.length >= 0 && arr.length < 3){
    return output;
  }
  if (arr.length % 2 === 1) {
    output.push(Math.ceil((arr.length/2)));
  } else {
    for (let i = (arr.length/2) - 1; i < (arr.length/2) + 1; i++) {
      output.push(arr[i]);
    }
  }
  return output;
}

module.exports = middle;