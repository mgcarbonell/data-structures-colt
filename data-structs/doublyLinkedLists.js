/*
Objectives:
Construct a doubly linked list.
Compare and contrast Doubly and Singly Linked Lists.
Implement basic operations on a Doubly Linked List.
*/

class Node {
  // val, next prev
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  };
};

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // PUSH - add a node to the end of the doubly linked list
  push(val) {
    // pseudo: create func w/ val passed to it 
    // if head prop is null set head && tail to be newly created node
    // If not, set next prop on tail to be that node
    // Set prev prop on newly created node to be tail
    // set tail to be newly created node
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // POP - remove something from the end
  pop() {
    // pseudo: if no head, return undefined
    // store current tail in var to return later
    // if len === 1, set head && tail null
    // update tail to be prev node
    // set newTail next to null
    // decrement length && return value removed
    if (!this.head) return undefined;

    let popped = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
    }

    this.length--;
    return popped;
  }

  // SHIFT - removes from beginning
  shift() {
    // pseudo: If len == 0 return undefined
    // Store cur head prop in var
    // if len === 1 set head null set tail null
    // update head to be next of old head
    // set heads prev prop to null
    // dec length && return old head
    if (this.length === 0) return undefined;

    let oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    };

    this.length--;
    return oldHead;
  }

  // UNSHIFT - adding a node to the beginning of the DLL
  unshift(val) {
    // pseudo: Create new node w/ val passed to func
    // If len === 0 set head to new node set tail to new node update head
    // Increment length && return list
    let newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // GET - Access a node in a DLL by position
  get(index) {
    // pseudo: if idx < 0 && >= len return null
    // if idx <= / 2 len loop starting from head -> mid return node
    // if idx > / 2 len loop through list starting from tail return node
    if (index < 0 || index >= this.length) return null;

    let count, current;

    if (index <= this.length / 2) { // left
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else { //right
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  // SET - replace the value of a node 
  set(index, val) {
    // pseudo: Create a var which is the result of the get
    // If get method returns a valid node, set value to the val passed
    // return true
    // or return false
    let foundNode = this.get(index)

    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    };

    return false;
  }

  // INSERT - Adding a node to the DLL @ a certain position
  insert(index, value) {
    // pseudo: If idx < 0 || idx >= len return false
    // if idx == 0 unshift
    // if idx == len push
    // use get method to access idx - 1
    // set next & prev prop on nodes to link
    // increment length && return true
    if (index < 0 || index > this.length) return false;
    if (index === 0) return this.unshift(val);
    if (index === this.length) return this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;

    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  // REMOVE - removing a node by a certain position
  remove(index) {
    // pseudo: if idx < 0 || idx >= len return undefined
    // if idx === 0 shift()
    // if idx === len - 1 pop()
    // use get method to retrieve item to be removed
    // update next && prev props
    // set next && prev to null on found node
    // decrement len && return removed node
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let nextNode = null;
    let prevnode = null;

    for (let i = 0; i < this.length; i++) {
      nextNode = currentNode.next;
      currentNode.next = prevNode;
      currentNode.prev = nextnode;
      prevNode = currentNode;
      currentNode = nextnode;
    }

    return this;
  }


};