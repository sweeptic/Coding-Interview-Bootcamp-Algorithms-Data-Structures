// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const array = n.toString().split('');
  const res = [];

  if (array[0] == '-') res.unshift(array.shift());

  while (array.length) {
    res.push(array.pop());
  }

  // console.log(n, res);
  console.log(n, +res.join(''));

  return +res.join('');
}

module.exports = reverseInt;
