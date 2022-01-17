const takeUntil = function(array, callback) {
  let i = 0;
  const result = [];
  while (!callback(array[i])) {
    result.push(array[i]);
    i++;
  }
  return result;
}

module.exports = takeUntil;