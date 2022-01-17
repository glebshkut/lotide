const findKeyByValue = function(obj, value) {
  // scan all values and return the first key where value is present
  for (const key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
}


module.exports = findKeyByValue;