// Pivot Helper (or Partition Helper)

// * Given an array this helper function should designate an element as the 
// pivot.
// * It should rearrange elements in the array so that all values less than the
// pivot are moved to the left of the pivot, and all values greater than the
// pivot are moved to the right of it.
// * Order on either side of the pivot doesn't matter
// * helper should do it IN PLACE (doesn't make a new array)
// * return index of the pivot.
// * Pivot matters, runtime depends on how the pivot is selected
// * Ideally a pivot should be chosen so that it's roughly the median value of
// the data set you're sorting.
// * For simplicity we can choose the first element to be the pivot.

let arr = [5, 2, 1, 8, 4, 7, 6, 3]
pivot(arr); // 4
arr;
// any one of these is an acceptable mutation:
// [2, 1, 4, 3, 5, 8, 7, 6]
// [1, 4, 3, 2, 5, 7, 6, 8]
// [3, 2, 1, 4, 5, 6, 7, 8]
// [4, 1, 2, 3, 5, 6, 8, 7]
//              ^ index 4

// Pivot Psuedocode
// 1. write a function that accepts three args: arr, start idx, end idx
// 2. Grab the pivot from the start of the array.
// 3. Store the current pivot index in a variable (keeps track of where)
//    the pivot should end up).
// 4. Loop through array from beginning to end:
//    - if the pivot is greater than the current element, increasement the
//      pivot index variable and then swap the current elem with elem @ pivot
//      idx.
// 5. Swap the starting elem (i.e. the pivot) w/ pivot idx
// 6. Return pivot idx

function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
};

// Quicksort Psuedo Code
/*
1. Call the pivot helper on the array
2. When the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of the index, and the subarray to the right of the index.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  // if is our base case 
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  // and return something
  return arr;
}

const sorted = quickSort([2, 6, 4, 9, 1, -3, 5, 3])

console.log(sorted)