
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {
    return [];
  }
  let res = [];
  for (let i = 0; i < matrix.length; i++) {
      if (i%2 != 0) {
        for (let y = 0; y < matrix[i].length; y++) {
          res.push(matrix[i].reverse()[y]);
      } 
      }
      else {
        for (let x = 0; x < matrix[i].length; x++) {
            res.push(matrix[i][x]);
        }
      }     
  }
  return res;
}
