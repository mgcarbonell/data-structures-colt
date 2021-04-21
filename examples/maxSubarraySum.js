/*
  Write a fucntion called maxSubarraySum which accepts an array of itnegers and a number called n. The function should calculate the maximum sum of n consecutive elements int he array.
*/


// our naive solution
/*
function maxSubarraySum(arr, num) {  
  // if the number is greater than the array length, return null.
  if (num > arr.length) {
    return null
  }
  
  // start max at -Infin in case we have an array of negative intengers.
  let max = -Infinity;
  // loop through the array minus the number (of consecutive) + 1 (since arrays 
  // start at 0)
  for (let i = 0; i < arr.length - num + 1; i++){
    // temp stores the temporary maximum
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    // however if the temp is greater than the maximum
    // make maximum = to the temporary number.
    if (temp > max) {
      max = temp;
    }
  }
  return max
}
*/

// refactor to implement the sliding window:

// O(N)
function maxSubarraySum(arr, num) {
  // set our variables.
  let maxSum = 0;
  let tempSum = 0;
  // if the arr length is smaller than the numbers to sum, null
  if (arr.length < num) return null;
  // let's create our first maxSum, first n integers of the array.
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // make our tempSum our maxSum
  tempSum = maxSum;
  // 
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    // find the maximum between maxSum and tempSum
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null