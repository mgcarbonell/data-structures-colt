// Psuedocode
// Create an empty array, take a look at the smallest values in each input array.
// While there are still values we haven't looked at...
// * If the value in the first array is SMALLER than the value in the second
//    array, push the value in the first array into our results and move on to
//    the next value in the first array.
// * If the value in the first array is LARGER than the value in the second
//    array, push the value in the second array into our results and move on to
//    the next value in the second array.
// * Once we exhaust one array, push in all remaining values from the other
//    array.

// the merge function alone will only merge a SORTED ARRAY. In order to
// do a merge sort, we will need to have a helper, recrusive function.
function merge(arr1, arr2) {
  // results array
  let results = [];
  // make some pointers
  let i = 0;
  let j = 0;

  // while roop that runs while i && j < array
  while (i < arr1.length && j < arr2.length) {
    // if the value in arr1 is less than the value in arr2
    // push i into into results.
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else { //otherwise push the value of arr2 into results.
      results.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++;
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++;
  }
    
  return results;
}

// let merged = merge([100,200], [1,2,3,5,6])
// console.log(merged)

// mergeSort Psuedocode:
// Break up the array into halves until you have arrays that are empty or have one element.
// we'll use .slice() in order to break up the arrays.
// Once we have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// Once the array has been merged back toghter, return the merged (and sorted) array.

function mergeSort(arr) {
  // if the array is less than 1 elem, return the array
  if (arr.length <= 1) return arr
  // split the array down the middle into left and right
  let mid = Math.floor(arr.length / 2);
  //we call mergeSort on each side, left starts at index 0
  let left = mergeSort(arr.slice(0, mid));
  // right gets split on the basis of the second half of mid
  let right = mergeSort(arr.slice(mid));
  // merge them together!
  return merge(left, right);
}