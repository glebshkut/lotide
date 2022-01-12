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

const flatten = function(arr) {
  let flattened = [];
  // go through arr1
  for (let item of arr) {
    if (Array.isArray(item)) {
      for (let elem of item) {
        flattened.push(elem);
      }
    } else {
      flattened.push(item);
    }
  }
  return flattened;
  // check if it's an array and go through element
}

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
