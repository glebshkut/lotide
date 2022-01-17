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


module.exports = countOnly;