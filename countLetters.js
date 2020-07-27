const countLetters = letters => {
  const results = {};
  for (const letter of letters) {
    if (results[letter]) {
      results[letter] += 1;
      } else if (!(letter === ' ')) {
      results[letter] = 1;
    }
  }
  return results;
};

module.exports = countLetters;