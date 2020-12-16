// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function buildBlock(n, block, res) {
  let i = 0;
  while (i < n) {
    res.push(block);
    res.unshift(block);
    i++;
  }
}

function pyramid(n) {
  let i = 0;
  let j = n - 1;

  while (i < n) {
    const res = ['#'];

    buildBlock(Math.abs(j - n) - 1, '#', res);
    buildBlock(j, ' ', res);

    console.log(res.join(''));

    i++;
    j--;
  }
}

module.exports = pyramid;
