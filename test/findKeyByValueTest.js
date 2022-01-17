const findKeyByValue = require("../findKeyByValue");
const assert = require('chai').assert;


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  scary: "It 2",
  fllsf: "Mda"
};


describe("#findKeyByValue", () => {
  it("The Wire return drama", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })
  it("That '70s Show return undefined", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  })
  it("It 2 return scary", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "It 2"), "scary");
  })
  it("Mda return fllsf", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Mda"), "fllsf");
  })
})

