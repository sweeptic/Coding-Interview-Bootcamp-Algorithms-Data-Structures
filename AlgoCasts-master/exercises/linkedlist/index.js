// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// HEAD - 0 - 0 - 0 - TAIL
// obj: data: string. next: null

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let len = 0;
    let pointer = this.head;

    while (pointer) {
      pointer = pointer.next;
      len++;
    }
    return len;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return;

    let node = this.head;
    let prev = null;

    while (node.next) {
      prev = node;
      node = node.next;
    }

    if (!prev) {
      this.head = null;
    } else {
      prev.next = null;
    }
  }

  insertLast(record) {
    const rec = new Node(record);
    const last = this.getLast();

    if (last) {
      last.next = rec;
    } else {
      this.head = rec;
    }
  }

  getAt(idx) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === idx) {
        return node;
      }
      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    const len = this.size();

    if (index > len || !len) return 'out of index';

    //if remove first element
    if (!index) {
      this.removeFirst();
    }
    // remove last element
    else if (index === len - 1) {
      this.removeLast();
    } else {
      const prev = this.getAt(index - 1);
      const next = this.getAt(index + 1);
      prev.next = next;
    }
  }

  insertAt(itemArg, index) {
    const len = this.size();

    if (!len) {
      this.insertFirst(itemArg);
    } else if (index > len) {
      this.insertLast(itemArg);
    } else if (index === len) {
      this.insertLast(itemArg);
    } else if (index === 0) {
      this.insertFirst(itemArg);
    } else {
      const newItem = new Node(itemArg);
      const prev = this.getAt(index - 1);
      const next = this.getAt(index);

      prev.next = newItem;
      newItem.next = next;
    }
  }

  forEach(cb) {
    const len = this.size();
    let index = 0;

    while (len > index) {
      const item = this.getAt(index);
      cb(item);
      index++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;

    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
