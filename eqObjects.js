const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {


  if(!(Object.keys(object1).length === Object.keys(object2).length)) { // check equal length of elements
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
  }

  // check keys are the same
  const keys = Object.keys(object1);
  // go through every element
  for (let i = 0; i < keys.length; i++) {
    // if(!(object1[keys[i]].length === object2[keys[i]].length)) { // check equal length of elements
    //   return false;
    // }

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
  // if elem is array, do another loop comparing them
  return true;
};


// also check not by index, but by keys



// TESTS
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false