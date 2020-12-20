// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//recursive
// function fib(n, prev = 0, act = 1) {
//   if (n === 0) return 0;
//   if (n === 1) return act;
//   return fib(n - 1, act, act + prev);
// }

// //iterativ
function fib(n) {
  if (!n) {
    return 0;
  }
  let fib = 1;
  let act = 1;
  let prev = 0;
  for (let index = 1; index < n; index++) {
    fib = act + prev;
    prev = act;
    act = fib;
    // console.log(fib);
  }
  return fib;
}

module.exports = fib;
