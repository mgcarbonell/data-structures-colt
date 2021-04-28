/*
Objectives:
Define a queue
Understand use cases
Implementation operations on a queue data structure
We can do an array for implementation or build our own class.
*/

// Building a queue with an array



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
}