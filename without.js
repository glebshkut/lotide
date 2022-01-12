const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      return false;
    }
    
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};


const without = function(source, itemsToRemove) {
  let result = [...source];
  for (let i = 0; i < source.length; i++) {
    for (let k = 0; k < itemsToRemove.length; k++) {
      if (source[i] === itemsToRemove[k]) {
        result.splice(result.indexOf(source[i]),1);
      }
    }
  }
  return result;
}


console.log("total",without([1, 2, 3], [1])); // => [2, 3]
console.log("total",without([1, 2, "1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log("total",without(["1", "2", "3",4], [1, 2, "3",5-1]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);