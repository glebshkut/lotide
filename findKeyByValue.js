const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


const findKeyByValue = function(obj, value) {
  // scan all values and return the first key where value is present
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
}








// Tests
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire",
  scary: "It 2",
  fllsf: "Mda"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "It 2"), "scary");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Mda"), "fllsf");