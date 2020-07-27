const head = args => {
  let result;
  if (args === []) {
    return undefined;
  } else {
    result = args.shift();
    return result;
  }
};

module.exports = head;