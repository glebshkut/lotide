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

const eqObjects = function(object1, object2) {


  if(!(Object.keys(object1).length === Object.keys(object2).length)) { // check equal length of elements
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
  }
  const keys = Object.keys(object1);
  for (let i = 0; i < keys.length; i++) {
    if (Array.isArray(object1[keys[i]]) && Array.isArray(object2[keys[i]])) { // check if array
      if (!(eqArrays(object1[keys[i]],object2[keys[i]]))) {
        return false;
      }
      continue;
    }
    if (object1[keys[i]] !== object2[keys[i]]){
      return false;
    }
  }
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  console.log(eqObjects(actual, expected) ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
};



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(ab, abc);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertObjectsEqual(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertObjectsEqual(cd, cd2); // => false


module.exports = assertObjectsEqual;
