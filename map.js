const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
    
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}




// TESTS
assertArraysEqual(map([1,2,3,4,5],x => x * 2.5), [2.5,5,7.5,10,12.5]);
assertArraysEqual(map([1,2,3,4,5],x => x + 10), [11,12,13,14,15]);
assertArraysEqual(map(['Hello','Bye'], item => item[Math.floor(item.length/2)]), ['l','y']);

