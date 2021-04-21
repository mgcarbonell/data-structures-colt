// linear search psuedo code
// This function accepts an array and a value


function linearSearch(arr, value) {
  // loop through the array nd check if the current array element is equal to the value
  // if it is return the index at which the element is found
  // if the value is never found, return -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}