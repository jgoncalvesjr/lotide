const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

const test1 = { a: "1", b: "2" };
const test2 = { b: "2", a: "1" };
const test6 = { c: "1", d: ["2", 3] };
const test7 = { d: ["2", 3], c: "1" };
const test10 = { a: { y: 0, z: 1 }, b: 2 };
const test12 = { a: { z: 1, y: 0 }, b: 2 };

describe("#eqObjects", () => {
  it("It returns true if keys and values of objects are equal", () => {
    assert.strictEqual((eqObjects(test1, test2)), true);
  });
  it("It compares arrays within objects", () => {
    assert.strictEqual((eqObjects(test6, test7)), true);    
  });
  it("It compares nested objects", () => {
    assert.strictEqual((eqObjects(test10, test12)), true);
  });
});