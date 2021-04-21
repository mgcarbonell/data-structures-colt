//Insertion Sort Psuedocode
// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the correct position, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
// 4. Repeat until the array is sorted.

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let currentVal = arr[i];
    let index = i;
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    arr[index] = currentVal;
    console.log(arr);
  }
  return arr;
}

let sort = insertionSort([2, 1, 9, 76, 4])

console.log(sort)