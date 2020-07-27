const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("It returns false when arrays have different lengths", () => {
    assert.strictEqual((eqArrays([1, 2, 3], [1, 2])), false);
  });
  it("It returns true when arrays have same lenghts, values and data types", () => {
    assert.strictEqual((eqArrays([1, 2, 3], [1, 2, 3])), true);    
  });
  it("It returns false when arrays have same lenghts and values but different data types", () => {
    assert.strictEqual((eqArrays([1, 2, 3], [1, 2, '3'])), false);
  });
  it("It can compare nested arrays", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
});