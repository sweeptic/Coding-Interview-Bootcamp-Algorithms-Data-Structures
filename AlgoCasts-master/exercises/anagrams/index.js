// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function charSorter(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagrams(stringA, stringB) {
  return charSorter(stringA) === charSorter(stringB);
}

/*
function charBuilder(str) {
  str.replace(/[^\w]/g, '').toLowerCase();
  const objRes = {};
  str.split('').map(item => {
    objRes[item] = objRes[item] + 1 || 1;
  });
  return objRes;
}

function anagrams(stringA, stringB) {
  let anagram = true;
  const objA = charBuilder(stringA);
  const objB = charBuilder(stringB);
  if (Object.keys(objA).length !== Object.keys(objB).length) return false;
  for (const key in objA) {
    if (!objB[key]) anagram = false;
  }
  return anagram;
}
*/
module.exports = anagrams;
