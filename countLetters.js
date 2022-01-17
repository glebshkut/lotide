const countLetters = function(string) {
  string = string.split(' ').join('');
  const result = {};
  for (const letter of string) {
    if (result[letter]) { // exist
      result[letter]++;
    } else { // doesn't exist
      result[letter] = 1;
    }
  }
  return result;
}

module.exports = countLetters;