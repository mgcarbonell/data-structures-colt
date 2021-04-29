/*
Objectives:
Define a tree
Implement a binary search tree
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
  // INSERT - iterative
  insert() {
    // create a new node
    // Starting at the root:
    // check if root, if not, root = new node
    // if root, check if new node < || > root:
    // if greater -> check to see if there is a node to the right:
    // if there is, move to that node and repeat
    // if there is not, add the node to the right    
    // if less -> check to see if there is a node to the left:
    // if there is, move to that node and repeat the steps
    // if there is not, add that node to the left
    // good case for recursive (repeating steps)
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

  // FIND 
  find(value) {
    // similar to inert, start @ root, check if there is one, if not we're done
    // if root, check if val of new node is the node we're looking for
    // found it? Done.
    // If not check to see if the value is > || < root
    // if less: check to see if there is a node to the left.
    // If there is, move to that node, repeat the steps
    // if there is not, we're done
    // if greater: check to see if there's a node to the right.
    // If there is, move to that node, repeat the steps
    // If there is not, we're done!
    // return the node
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
}

// const tree = new BinarySearchTree();
// console.log(tree)
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
// console.log(tree)
// ^^ this can be a pain so instead let's do an insert method.