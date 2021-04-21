/*
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.
*/

/*
example:

 i ->
[1, 1, 1, 2, 3, 3, 4, 4, 5, 6]
    j ->
*/
// note we mutate the array here
// if we did not want to mutate we could...
// map, create a new array
// this also only works with a sorted array
function countUniqueValues(arr) {
  if(arr.length === 0) return 0
  // start with our iterate at 0
  let i = 0;
  // loop through our array with our second pointer
  for (let j = 1; j < arr.length; j++) {
    // compare arr[i] & arr[j]
    if (arr[i] !== arr[j]) {
      // move i up
      i++;
      // set i to j
      arr[i] == arr[j];
    }
    // console.log(i, j)
  }
  return i + 1;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 4, 5, 6, 6, 7]))