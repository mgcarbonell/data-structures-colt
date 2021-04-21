/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the inter passed to the function. If there isn't one, return 0 instead.
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }

    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}