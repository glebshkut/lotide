const letterPositions = require("../letterPositions");
const assert = require('chai').assert;



describe("#letterPositions", () => {
  it("returns array of indexes of letter 'e' in word 'hello'", () => {
    assert.deepEqual(letterPositions("hello").h,[0]);
  })
  it("returns array of indexes of letter 'e' in word 'hello'", () => {
    assert.deepEqual(letterPositions("hello").e,[1]);
  })
  it("returns array of indexes of letter 'l' in word 'hello'", () => {
    assert.deepEqual(letterPositions("hello").l,[2,3]);
  })
})