// A linked list is a collection of nodes.
// a node stores data - val and a reference to the next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  };
  // PUSH - adds values at the end
  // pseudocode: function should accept a value
  // create new node using the value passed to the func
  // if no head prop on the list, set head && tail to be newly created node
  // else set next prop on tail to new node && set tail on list to new node
  // increment length by one
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };
  // POP - removes last node
  // pseudocode: no nodes in list, return undefined
  // loop through list until tail
  // set next prop of 2nd to last node to null
  // set tail to be 2nd to last node
  // decrement length of list by 1
  // return val of the node removed
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  };
  // SHIFT - remove a new node from the beginning
  // pseudocode: if no nodes return undefined
  // store current head prop in var
  // set head prop to be cur head's next prop
  // decrement len by 1
  // return val of node removed
  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  };
  // UNSHIFT - add a new node at the beginning
  // pseudo code: function should accept a val
  // create new node using val passed to func
  // if no head prop on list, set head and tail to be new node
  // set newly created node's next prop to be current head
  // set head prop on list to be newly created node
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  };
  // GET - retrieve a node by its position
  // pseudo code: func should accept an index
  // if idx < 0 || idx >= list.length return null
  // loop through list until idx reached, return node @ idx (counter variable)
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  };
  // SET - change the val of a node based on its position
  // pseudo code - func should accept a val && idx
  // use get func to find specific node
  // if node not found return false
  // if ndoe found update val && return true
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  };
  // INSERT - add a node to the linked list at a specific position
  // pseudo code: define func (index val)
  // if idx < 0 || idx > length return false
  // if idx = 0 unshift new node to start
  // else use get access node at index - 1 (prev node)
  // set next prop on node to be new node
  // set next prop on new node to be prev node
  // increment length
  // return true
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // coerce a true
    if (index === 0) return !!this.unshift(val); // coerce a true

    let newNode = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;

    return true;
  };
  // REMOVE - remove a node @ a specific position
  // pseudo code: if idx < 0 || idx > length return undefined
  // if idx == length - 1, pop
  // if idx == 0, shift
  // use get to access node @ index - 1
  // set next prop on node to be next of next node
  // decrement length
  // return value of the node removed
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) return this.shift();

    const previousNode = this.get(index - 1);
    const removed = previousNode.next;
    previousNode.next = removed
    this.length--;

    return removed
  };
  // REVERSE - reversing the linked list in place
  // pseudo code: swap head & tail
  // create var for next & prev & a var initlalized to head prop
  // loop through list
  // set next to be the next prop on whatever node is
  // set next prop on the node to be whatever prev is
  // set prev to the val of the node var
  // set node var to be the valu of next var
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  };
  // PRINT - prints our list
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val)
      current = current.next
    }
    console.log(arr);
  };
}

const list = new SinglyLinkedList()
list.push(9)
list.push(10)
list.push(20)
list.push(30)
list.push(40)
list.push(50)
