/*
There's an easy way of storing a binary heap: a list/array.
The root gets an index of 0, children, 1, 2
For any index of an array n...
The left child is stored at index of 2n + 1
The right child is stored at index of 2n + 2
Or for any child node at index n...
Its parent is at index (n-1)/2 floored.
*/

/*
Defining our class:
Class name: MaxBinaryHeap
Properties: values = []
*/

/*
Adding to a MaxBinaryHeap: add to the end, bubble up (swap until it finds its correct place)
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    // pseudo: push val elem into vals prop on heap
    // bubble it up: create a var called index which is val.len - 1
    // create a var called parentIndex which is the floor of index - 1 / 2
    // loop as long as val @ parentIdx < val @ child idx
    // - swap val
    // - set indx to parentidx and start it over
    this.values.push(element);
    this.bubble();
  }
  bubble() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    // loop
    while (true) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx]
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  extractMax() { // aka remove
    // swap 1st val in val prop with val.len - 1
    // pop from val prop to return a val
    // have new root "sink down" to correct spot
    // - parent idx start @ 0 (the root)
    // - find the idx of the left child: 2 * idx + 1
    // - find the idx of the right child: 2 * idx + 2
    // - if left || right > element swap. left && right > element swap largest
    // - child idx swapped now becomes new parentIdx
    // keep looping & swapping until neither child is larger than elem
    // return the old root!

    const max = this.values[0];
    const end = this.values.pop();
    // There's an edge case here: if there is only 1 thing left in the list.
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      // store values @ indices
      let leftChild, rightChild;
      // swap
      let swap = null;
      // check if the left idx is in bounds
      if (leftChildIdx < lenght) {
        letChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      //if no swaps
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
    }

  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);


