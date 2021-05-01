/*
Depth First Search DFS - PreOrder steps recursively:
* Create a variable to store the values of nodes visited
* Stored the root of the BST in a variable called current
* Write a helper function which accepts a node
  * Push the value of the node to the variable that stores the values
  * If the node has a left property call the helper function with the left property on the node.
  * If the node has a right property call the helper function with the right property on the node.
* Invoke helper func with current variable
* Return the array of values (values we visited)

Depth First Search DFS - PostOrder steps recursively:
* Create a var to store the vals of nodes visited
* Store the root of the BSt i a var called current
* Write a hlper func which accepts a node
  * If the node has a left prop, call helper func with left prop on node
  * If the node has a right prop, call helper func with right prop on node
  * Push the val of the node to the var that stores the vals
  * Invoke helper func with current var
* Return the array of values

Depth First Search DFS - InOrder steps recursively:
* Create a var to store the val of nodes visited
* Store the root of the BST in a var called current
* Write a helper func which accepts a node
  * If the node has a left prop, call helper func with left prop on node
  * Push val of node to the var that stores the vals
  * If the node has a right prop, call helper func with right prop on node
* Invoke the helper func with the current var
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
      if (node.left) queue.push(node.left); //node.left && traverse(node.left)
      if (node.right) queue.push(node.right); //node.right && traverse(node.right)
    }

    return data;
  }

  DFSPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left); //node.left && traverse(node.left)
      if (node.right) traverse(node.right); //node.right && traverse(node.right)
    }
    traverse(this.root);
    return data;
  }
  DFSPostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left); //node.left && traverse(node.left)
      if (node.right) traverse(node.right); //node.right && traverse(node.right)
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left); //node.left && traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right); //node.right && traverse(node.right)
    }
    traverse(this.root)
    return data;
  }
}

//              10
//           6     15
//          3 8     20
const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree.DFSPostOrder());
console.log(tree.DFSPreOrder());
console.log(tree.DFSInOrder())