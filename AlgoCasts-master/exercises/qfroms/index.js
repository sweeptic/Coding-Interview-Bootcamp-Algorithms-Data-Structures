// --- Directions
// Implement a Queue data structure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  add(element) {
    this.stack1.push(element);
  }

  convert() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }
  }

  convertBack() {
    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  peek() {
    this.convert();
    const record = this.stack2.peek();
    this.convertBack();
    return record;
  }

  remove() {
    this.convert();

    const res = this.stack2.pop();

    this.convertBack();
    return res;
  }
}

module.exports = Queue;
