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


module.exports = flatten;