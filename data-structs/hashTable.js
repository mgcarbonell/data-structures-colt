/*
Imagine that hash tables disappear, what would we ever do?!
We'll be reinventing the wheel but oh well.

To implement a hash table, we'll be using an array. And in order to look up
values by key, we need a way to convert keys into valid array indices.

We will also be writing a function that performs this task by writing a hash
function. What makes a good hash? It's fast. We want something with constant
time. It will uniformly distribute values. It's deterministic.
*/

// we'll be using charCodeAt(). Remember CS50 with bit representation of ASCII/
// UTF. We'll be subtracting 96 from most characters to get a singular digit.

// so we can take lengthof the array and mod it for a whole integer to store
// our data in. 

function basicHash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

// some problems: Only hashes strings (don't worry about this one today)
// It is not constant time - linear in key length. Longer string = longer hash.
// Could be a little more random, data can be clustered easily. 
// let's refine it!

function improvedHash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
/*
How do we deal with collisions? Collisions are inevitable.
There's a few solutions, let's look at...
Separate Chaining: at each idx in our arr we store vals using a more
sophisticated data structure like a linked list or something.
Linear Probing: When we find a collision, we search through the array to find
the next empty spot. We don't nest things.
*/

class HashTable {
  // we want a prime number, and if we don't provide a size, it'll default to 53
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  // SET - accepts a key && value, hashes key, stores key-val pair by separate 
  // cahining, 
  set(key, value) {
    let index = this._hash(key);
    if (!this.keyMap[index]) { // is nothing there?
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
  // GET - accepts a key, hashes the key, retrives key value pair, returns
  // undefined if nothing is there. 
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      // return this.keyMap[index];
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1] // return the value
        }
      }
    }
    return undefined;
  }
  // VALUES - returns all values in the table
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.kepMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr;
  }
  // KEYS - returns all keys in the table
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.kepMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable(17);
ht.set('maroon', '#800000')
ht.set('yellow', '#FFFF00')
ht.set('olive', '#808000')
ht.set('salmon', '#FA8072')
ht.set('lightcoral', '#F08080')
ht.set('mediumvioletred', '#C71585')
ht.set('plum', '#DDA0DD')
console.log(ht)
console.log(ht.get('yellow'))
