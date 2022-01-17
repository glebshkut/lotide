const eqArrays = require("./eqArrays");


const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected) ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);

};

module.exports = assertArraysEqual;