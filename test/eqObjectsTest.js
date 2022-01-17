const eqObjects = require("../eqObjects");
const assert = require('chai').assert;




describe("#eqObjects", () => {
  it("return true for a: 1, b: 2 && b: 2, a: 1", () => {
    assert.isTrue(eqObjects({ a: "1", b: "2" }, { b: "2", a: "1" }));
  });

  it('return false for a: "1", b: "2", c: "3" && a: "1", b: "2"', () => {
    assert.isFalse(eqObjects({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" }));
  });

  it('return true for c: "1", d: ["2", 3] && d: ["2", 3], c: "1"', () => {
    assert.isTrue(eqObjects({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" }));
  });

});