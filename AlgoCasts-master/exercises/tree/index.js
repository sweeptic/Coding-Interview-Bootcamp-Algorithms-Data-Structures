// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    const node = new Node(data);
    this.children.push(node);
  }

  remove(data) {
    this.children = this.children.filter(node => data !== node.data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(cb) {
    const items = [];
    items.push(this.root);

    while (items.length) {
      // console.log(items[0].data);

      cb(items[0]);

      items[0].children.map(item => {
        items.push(item);
      });

      items.shift();
    }

    //  while (items.length) {
    //    console.log(items[0].data);
    //    const actual = items.shift();
    //    cb(actual);
    //    items.push(...actual.children);
    // }
  }

  traverseDF(cb) {
    const items = [];
    items.push(this.root);

    while (items.length) {
      // console.log(items[0].data);
      const actual = items.shift();
      cb(actual);
      items.unshift(...actual.children);
    }
  }
}

module.exports = { Tree, Node };
