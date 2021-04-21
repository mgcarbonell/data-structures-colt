/*
  Implement a function called areThereDuplicates which accepts a variable number of arguments and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.
*/

// Frequency Counter
function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }

  for (let key in collection) {
    if(collection[key] > 1) return true
  }
  return false
}

// Multiple Pointers
function areThereDuplicates(...args) {
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true
    }
    start++;
    next++;
  }
  return false
}