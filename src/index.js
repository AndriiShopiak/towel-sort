
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {
    return [];
  }
  const res = matrix.reduce((accumulator, curent, index) => {
    curent.sort((a,b) => {
        if(index % 2 == 0) {
            return a - b;
        }
        else {
            return b - a;
        }
    }).map(x => accumulator.push(x));
    return accumulator;
},[]);
  
  return res;
}
