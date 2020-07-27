const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("It returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("It returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
  it("It returns undefined for an empty Array", () => {
    assert.strictEqual(head([]), undefined); 
  });
});