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

    if (!this.head) {
      this.head = rec;
      return;
    }

    let pointer = this.head;

    while (pointer.next) {
      pointer = pointer.next;
    }

    pointer.next = rec;
  }

  getAt(idx) {
    let pointer = this.head;
    let index = 0;

    while (idx > index) {
      if (!pointer || !pointer.next) {
        return null;
      }
      pointer = pointer.next;
      index++;
    }
    return pointer;
  }
}

module.exports = { Node, LinkedList };
