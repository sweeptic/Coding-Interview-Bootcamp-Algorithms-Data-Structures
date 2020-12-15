// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  const res = [];
  let i = 0;
  while (i < n) {
    res.push(' ');
    i++;
  }
  i = 0;
  while (i < n) {
    res.unshift('#');
    res.pop();
    console.log(res.join(''));
    i++;
  }
}

module.exports = steps;
