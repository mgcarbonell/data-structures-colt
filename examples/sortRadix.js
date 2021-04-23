// Radix Sort: Helper Methods
/*
1. We'll have a function that takes num and place.
2. It will return the digit in num at the given place value.
getDigit(12345, 0) => 5
getDigit(12345, 1) => 4
getDigit(12345, 2) => 3
getDigit(12345, 3) => 2
getDigit(12345, 4) => 1
getDigit(12345, 5) => 0
*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  // Math.abs makes it so we can work with negative numbers
  // Math.floor rounds down to the nearest integer, remember.
}

/*
Second helper method:
digitCount(num) - returns the number of digits in num
digitCount(1)   => 1
digitCount(25)  => 2
digitCount(314) => 3
*/

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
  // Math.abs makes it so we can use negative numbers.
  // Math.log10 = 10 to what power gives us this number?
  // 
}

/*
Third radix helper: mostDigits(nums)
* Given an array of numbers, returns the numbers of digits in the largest numbers in the list.
mostDigits([1234, 56, 7]) => 4
mostDigits([1, 1, 11111, 1]) => 5
mostDigits([12, 34, 56, 78]) => 2
*/

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

/*
Radix Sort Psuedocode:
1. Define a function that accepts a list of numbers
2. Figure out how many digits the largest number has (mostDigits())
3. Loop from k = 0 up to this largest number of digits
4. For each iteration of the loop:
    * Create buckets for each digit (0 to 9)
    * place each number in the corresponding bucket based on its kth digit
5. Replace our existing array with values in our buckets, starting with 9 and going up to 9
6. return list at the end!
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    // name a variable and use Array.from, give it a length of 10, and also 
    // create 10 empty arrays
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // this loops through all the digits
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    // console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    // console.log(nums);
  }
  return nums
}

const sortedByRadix = radixSort([23, 345, 5467, 12, 234, 9852, 938948, 3943, 19238, 132431, 3, 1, 10])
console.log(sortedByRadix)