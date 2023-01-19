
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length == 0) {
    return [];
  }
  const res = matrix.reduce((acc, cur, i) => {
    cur.sort((a,b) => {
        if(!(i & 1)) {
            return a - b;
        }
        else {
            return b - a;
        }
    }).map(e => acc.push(e));
    return acc;
},[]);
  
  return res;
}
