// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  const t = str.split('');
  const newArr = [];

  while (t.length) {
    newArr.unshift(t.shift());
  }

  return newArr.join('');
}

reverse('apple');

module.exports = reverse;
