/*
Objectives:
What is a stack
Understand use cases for a stack
Implement operations on a stack data structure
This will be a Linked List implementation
*/

// Array implementation

const stack = []
// to add to the stack
stack.push("google")
stack.push("instagram")
stack.push("youtube")
// stack has 3 things in it now
console.log(stack)

//to remove from the stack
stack.pop() // => removes youtube
stack.pop() // => removes instagram
stack.pop() // => removes google, sets stack to null
// stack.pop() // => null

// another method - unshift and shift
// it's important to remember that adding to the beginning is NOT the best!!!
// EVERYTHING NEEDS TO BE RE-INDEXED WHEN WE UNSHIFT and SHIFT!!

// adds to the beginning
stack.unshift('create new file')
stack.unshift('resized file')
stack.unshift('cloned file')

// since we work in the opposite manner, rather than pushing to the end 
// we are unshifting (adding to the beginning) we need to shift so it removes
// the beginning as well
stack.shift()
stack.shift()
stack.shift()

// Class implementation
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;

    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}