/*
Priority Queue:
A data structure where each element has a priority. Elements with higher
priorities are served before elements with lower priorities.
Very similar to a binay heap, remember
Class name: PriorityQueue
Properties: values = []
but what's different? We also need a class of node w/ val and priority
*/

/*
Write a Min Binary Heap - lower number means higher priority
Each node has a val and a priority. Use the priority to build the heap.
Enqueue method accepts a value and a priority, makes a new node, and puts it in
the right spot based off of priority.
Dequeue method removes root element, returns it, and rearranges heap using
priority.
*/


class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubble();
  }
  bubble() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      // we need to change element <= 0 to priority
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < lenght) {
        letChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }
  }
}


class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // we could replace priority with Date.now() or something
    // or priority level + resources + how long it's been waiting
  }
}