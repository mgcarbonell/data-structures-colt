// psuedo code:
// Function accepts a SORTED array and a value
// Create a left pointer at the start of the array 0
// and a right pointer at the end of the array. arr.length - 1
// 
// 


/*
// LONG VERSION
function binarySearch(arr, elem) {
  // left = start
  // right = end
  // middle = middle
  let start = 0;
  let end = arr.length - 1;
  // Math.floor ensures it's a whole integer, rounded down
  // Math.ceiling would round up.
  let middle = Math.floor((start + end) / 2);
  
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  // check if arr middle is equal to what we're looking for
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}
*/
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15))

// CONDENSED VERSION
function binarySearch(arr, elem) {
  // left = start
  // right = end
  // middle = middle
  let start = 0;
  let end = arr.length - 1;
  // Math.floor ensures it's a whole integer, rounded down
  // Math.ceiling would round up.
  let middle = Math.floor((start + end) / 2);
  
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    
    middle = Math.floor((start + end) / 2);
  }
  // check if arr middle is equal to what we're looking for
  return arr[middle] === elem ? middle : -1;
}
