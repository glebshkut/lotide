const takeUntil = require("../takeUntil");
const assert = require('chai').assert;



describe("#takeUtil", () => {
  it("returns [ 1, 2, 5, 7, 2 ] for [1, 2, 5, 7, 2, -1, 2, 4, 5] <= x > 0", () => {
    assert.deepEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
  })
  it('returns array until meets "," for "I\'ve", "been", "to", "Hollywood", ",", "I\'ve", "been", "to", "Redwood"', () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  })
})