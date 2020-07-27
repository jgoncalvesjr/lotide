const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  it("It returns an object counting letters from a single word", () => {
    assert.deepEqual(countLetters('test'), { 't' : 2, 'e' : 1, 's' : 1});
  });
  it("It does not count whitespaces when counting letters from a single word", () => {
    assert.deepEqual(countLetters('          test            '), { 't' : 2, 'e' : 1, 's' : 1});
  });
  it("It returns an object counting letters from multiple words, ignoring whitespaces", () => {
    assert.deepEqual(countLetters('I  love  living  in  Canada'), { 'C' : 1, 'I' : 1, 'a' : 3, 'd' : 1, 'e' : 1, 'g': 1, 'i': 3, 'l' : 2, 'n' : 3, 'o' : 1, 'v' : 2});
  });
  it("It returns an empty object for an empty string", () => {
    assert.deepEqual(countLetters(''), {});
  });
  it("It returns an empty object when there are only whitespaces in the string", () => {
    assert.deepEqual(countLetters('                                  '), {});
  });
  it("It counts upper case and lower case letters separately", () => {
    assert.deepEqual(countLetters('Star Wars wow'), {'S' : 1, 'w' : 2, 'W' : 1, 'a' : 2, 'o': 1, 'r' : 2, 's' : 1, 't': 1});
  });
});