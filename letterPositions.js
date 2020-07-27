const letterPositions = sentence => {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else if (!(sentence[i] === ' ')) {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

module.exports = letterPositions;