/* Write a function called sumZero which accepts a sorted array of integers.
   The function should find the first pair of where the sum is 0. Return an
   array that includes both values that sum to zero or undefined if a pair
   does not exist. 
*/

// naive O(N**2)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// refactor to pointers
function sumZeroP(arr) {
  // we'll start our left pointer at index position 0
  let left = 0;
  // start the right pointer at the last position of the array
  // arr.length - 1
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      // if the sum is greater than 0, decrement right 
      right--;
    } else {
      // if the sum is less than 0, increment left
      left++;
    }
  }
}
