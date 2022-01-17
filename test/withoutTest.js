const without = require("../without");
const assert = require('chai').assert;



describe("#without (removes specified items from array)", () => {
  it("returns [2, 3] for [1, 2, 3], [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  })
  it('returns ["1", "2"] for [1, 2, "1", "2", "3"], [1, 2, "3"]', () => {
    assert.deepEqual(without([1, 2, "1", "2", "3"], [1, 2, "3"]) , ["1", "2"]);
  })
  it('returns ["1", "2"] for ["1", "2", "3",4], [1, 2, "3", 4]) ', () => {
    assert.deepEqual(without(["1", "2", "3",4], [1, 2, "3", 4]), ["1", "2"]);
  })
  it('make sure original array wasn\'t altered', () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);

    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  })
})