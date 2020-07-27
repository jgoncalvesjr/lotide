const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("It returns an empty array when input is NOT Array", () => {
    assert.deepEqual(tail('test'), []);
  });
  it("It returns an empty array when input is an empty array", () => {
    assert.deepEqual(tail([]), []);
  });
  it("It returns an empty array when input is an array of one element", () => {
    assert.deepEqual(tail(['test']), []);
  });
  it("It returns all but the first element of an array of two elements", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse"]), ["Lighthouse"]);
  });
  it("It returns all but the first element of an array of three or more elements", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs", "It's me Mario!"]), ["Lighthouse", "Labs", "It's me Mario!"]);
  });
  it("It does not change the original array", () => {
    const test = ["Yo Yo", "Lighthouse", "Labs"]
    assert.notDeepEqual(tail(test), test);
  });
});