const tail = args => {
  let result = [];
  if (args === [] || args.length === 1) {
    return result;
  } else {
    result = args.slice(1);
    return result;
  }
};

module.exports = tail;