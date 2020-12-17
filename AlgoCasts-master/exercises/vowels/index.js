// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const arr = ['a', 'e', 'i', 'o', 'u'];
  const res = str
    .toLowerCase()
    .split('')
    .reduce((acc, item) => {
      if (arr.some(i => i === item)) acc++;
      return acc;
    }, 0);
  console.log(res);
  return res;
}

module.exports = vowels;
