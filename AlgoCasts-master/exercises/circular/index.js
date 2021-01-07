// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  const obj = {};
  let circular = false;
  let item = list.getFirst();

  while (!circular && item) {
    if (obj[item.data]) {
      circular = true;
    } else {
      obj[item.data] = 1;
    }

    item = item.next;
  }
  return circular;
}

module.exports = circular;
