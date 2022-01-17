const tail = function(text) {
  let arr = [...text];
  arr.shift();
  return arr;
};


module.exports = tail;
