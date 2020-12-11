// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const obj = {};
  let max = 0;
  let key = '';

  str.split('').map(item => {
    if (item !== ' ') {
      if (!obj[item]) {
        obj[item] = 1;
      } else {
        obj[item]++;
      }
      if (obj[item] > max) {
        max = obj[item];
        key = item;
      }
    }
  });

  // for (item in obj) {
  //    if (obj[item] > max) {
  //       max = item
  //    }
  // }

  //   console.log(obj);
  //   console.log(max, key);
  return key;
}

module.exports = maxChar;
