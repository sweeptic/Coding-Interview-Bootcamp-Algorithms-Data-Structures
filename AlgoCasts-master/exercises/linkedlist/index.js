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
    let pointer = this.head;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }

  clear() {
    this.head = null;
  }
}

module.exports = { Node, LinkedList };
