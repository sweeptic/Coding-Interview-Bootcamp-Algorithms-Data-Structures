// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  // console.log(root);
  // Given:
  //     0
  //   / |  \
  // 1   2   3
  // |       |
  // 4       5
  // Answer: [1, 3, 2]

  const items = [root, 'x'];
  const counters = [0];

  while (items.length > 1) {
    // console.log(items.length);
    //  console.log(items);

    const node = items.shift();

    if (node === 'x') {
      counters.push(0);
      items.push('x');
    } else {
      items.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  //   console.log(items, counters);
  return counters;
}

module.exports = levelWidth;
