const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countOnly = function(arr, obj) {
  // go through array and check if obj[elem] is true, then add +1 to obj2[elem]
  const result = {};
  for (const elem of arr) {
    if (obj[elem]) { // if true
      if(result[elem]) { // if exist
        result[elem]++;
      } else { // if doesn't exist
        result[elem] = 1;
      }
    }
  }
  return result;
  // if obj2 key doesn't exist yet, create it and assign 1
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

// assertEqual(result1["Jason"], 1);
// assertEqual(result1["Karima"], undefined);
// assertEqual(result1["Fang"], 2);
// assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;