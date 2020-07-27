const tail = args => {
  let result = [];
  if (!Array.isArray(args) || args === [] || args.length === 1) {
    return result;
  } else {
    result = args.slice(1);
    return result;
  }
};

module.exports = tail;