const letterPositions = function(sentence) {
  const results = {};
  // go through every letter of the sentence
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    }
    results[sentence[i]].push(i);
    // if it exists in the object, push index of sentence[i]
    
    // if it doesn't exist, create array and push index in there
  }

  return results;
};

module.exports = letterPositions;