/*
BFS - Steps iterative
* Create a queue (this can be an array) and a variable to store the values of nodes visited.
* Place the root node in the queue.
* Loop as long as there is anything in the queue:
  * Dequeue a node from the queue and push the value of the node into a variable that stores the nodes.
  * If there is a left property on the node dequeued - add it to the queue.
  * If there is a right property on the node dequeued - add it to the queue.
* Return the variable that stores all the values!

We can have a queue [] <= like a todo list
and a visited [] <= check if left or right? goes back to the queue
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root; // update as we go
      while (true) {
        if (value === current.value) return undefined; // avoids infinite loop
        if (value < current.value) {
          // less than current value, goes to the left
          if (current.left === null) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) return false;
    let current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  // first let's create the method, breadth first search
  BFS() {
    let node = this.root,
      data = [], // return at end
      queue = [];
    queue.push(node);

    while (queue.length) {
      node = queue.shift()
      data.push(node); // add to our list
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

