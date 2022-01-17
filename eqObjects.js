const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {

  if(!(Object.keys(object1).length === Object.keys(object2).length)) { // check equal length of elements
    return false;
  }

  for (const key of Object.keys(object1)) {
    if (!Object.keys(object2).includes(key)) {
      return false;
    }
  }

  const keys = Object.keys(object1); // keys = object 1 keys
  for (let i = 0; i < keys.length; i++) {
    let bool = Array.isArray(object1[keys[i]]) && Array.isArray(object2[keys[i]]);
  if (!bool && typeof object1[keys[i]] == "object" && typeof object2[keys[i]] == "object") {
    if (!eqObjects(object1[keys[i]], object2[keys[i]])) {
      return false;
    }
    continue;
  
  } else if (bool) { // check if array
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



// TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); // => true

// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false


module.exports = eqObjects;