const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("It returns an empty array when input is NOT Array", () => {
    assert.deepEqual(middle('test'), []);
  });
  it("It returns an empty array when input is an empty array", () => {
    assert.deepEqual(middle([]), []);
  });
  it("It returns an empty array when input is an array of one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("It returns an empty array when input is an array of two elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("It returns an array with one middle element when array length is even", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("It returns an array with two middle elements when array has even elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8]), [4, 5]);
  });
});