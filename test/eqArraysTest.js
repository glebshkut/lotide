const eqArrays = require("../eqArrays");
const assert = require('chai').assert;




describe("#eqArrays", () => {
  it("return true for [1, 2, 3], [1, 2, 3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  })

  it("return false for [1, 2, 3], [1, 2, 3, 4]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 3, 4]));
  })

  it("return false for [1, 2, 3], [3, 2, 1]", () => {
    assert.isFalse(eqArrays([1, 2, 3], [3, 2, 1]));
  })

  it('return true for ["1", "2", "3"], ["1", "2", "3"]', () => {
    assert.isTrue(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
  })

  it('return false for ["1", "2", "3"], ["1", "2", 3]', () => {
    assert.isFalse(eqArrays(["1", "2", "3"], ["1", "2", 3]));
  })

  it("return true for [[2, 3], [4]], [[2, 3], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  })

  it("return true for [[2, 3, [2, [12, 0]]], [4]], [[2, 3, [2, [12, 0]]], [4]]", () => {
    assert.isTrue(eqArrays([[2, 3, [2, [12, 0]]], [4]], [[2, 3, [2, [12, 0]]], [4]]));
  })
});