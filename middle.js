
const middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } 
  if (arr.length % 2 === 1) {
    return [arr[Math.floor(arr.length/2)]];
  }
  if(arr.length % 2 === 0) {
    return arr.slice(arr.length/2 - 1, arr.length/2 + 1);
  }
}




module.exports = middle;