// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  const max = ['', 0];

  str.split('').map(item => {
    obj[item] = obj[item] + 1 || 1;

    if (obj[item] > max[1]) {
      max[0] = item;
      max[1] = obj[item];
    }
  });

  console.log(obj);
  console.log(max);
  return max[0];
}

module.exports = maxChar;
