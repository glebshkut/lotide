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

const letterPositions = function(sentence) {
  const results = {};
  // go through every letter of the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
    // if it exists in the object, push index of sentence[i]
    
    // if it doesn't exist, create array and push index in there
  }
  console.log("result:", results);

  return results;
};

// assertArraysEqual(letterPositions("hello").h,[0]);
// assertArraysEqual(letterPositions("hello").e,[1]);
// assertArraysEqual(letterPositions("hello").l,[2,3]);

module.exports = letterPositions;