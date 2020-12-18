// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let it = n;
  let item = 1;
  const arr = [];
  arr[0] = [];
  let rowMin = 0;
  let rowMax = n - 1;
  let colMin = 0;
  let colMax = n - 1;

  //init
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for (let j = 0; j < n; j++) {
      arr[i].push(0);
    }
  }

  while (item <= n * n) {
    //right
    for (let i = colMin; i <= colMax; i++) {
      arr[rowMin][i] = item;
      item++;
    }
    rowMin++;

    //down
    for (let i = rowMin; i <= rowMax; i++) {
      arr[i][colMax] = item;
      item++;
    }
    colMax--;

    //left
    for (let i = colMax; i >= colMin; i--) {
      arr[rowMax][i] = item;
      item++;
    }
    rowMax--;

    //up
    for (let i = rowMax; i >= rowMin; i--) {
      arr[i][colMin] = item;
      item++;
    }
    colMin++;
  }

  console.log(arr);
  console.log(colMin, colMax, rowMin, rowMax);
  return arr;
}

module.exports = matrix;
