/*
Objectives:
Define a queue
Understand use cases
Implementation operations on a queue data structure
We can do an array for implementation or build our own class.
*/

// Building a queue with an array

const q = []

q.push('first')
q.push('second')
q.push('third')
// remember FIFO, first in first out
q.shift()
q.shift()
q.shift()
// remember: removing from the beginning requires everything to be reindexed.

q.unshift('first')
q.unshift('second')
q.unshift('third')
// remember: adding to the beginning requires everything to be reindexed.
q.pop()
q.pop()
q.pop()

// Building a queue with a class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // adds to the queue
  enqueue(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // removes from the queue
  dequeue() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }
    // take first and set it to the next one
    this.first = this.first.next;
    this.size--;
    return temp.value;

  }
}