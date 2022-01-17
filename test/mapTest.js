const map = require("../map");
const assert = require('chai').assert;



describe("#map", () => {
  it("multiply every element by 2.5", () => {
    assert.deepEqual(map([1,2,3,4,5],x => x * 2.5), [2.5,5,7.5,10,12.5]);
  })
  it("concat 10 to every element", () => {
    assert.deepEqual(map([1,2,3,4,5],x => x + 10), [11,12,13,14,15]);
  })
  it("returns middle element of every element from array", () => {
    assert.deepEqual(map(['Hello','Bye','Gleb'], item => item[Math.floor(item.length/2)]), ['l','y','e']);
  })
})