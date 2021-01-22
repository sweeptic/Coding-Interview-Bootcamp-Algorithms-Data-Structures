// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
}

function selectionSort(arr) {
  let i = 0;
  for (; i < arr.length; i++) {
    let min = i;

    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

function merge(left, right) {
  let sortedArr = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  // console.log(arr);

  if (arr.length < 2) return arr;

  const middle = arr.length / 2;

  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivot = arr.shift();
  const left = [];
  const right = [];

  arr.map(item => (item < pivot ? left.push(item) : right.push(item)));

  return [...quickSort(left), pivot, ...quickSort(right)];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
