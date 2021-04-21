// Psuedocode

// Store the first element as the smallest value seen so far
// Compare this item to the next item in the array until you find a smaller number.
// If the smaller number is found, designate that smaller number to the be the new "minimum" and continue until the end of the array.


// Less optimized
// const selectionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++){
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     console.log(arr)
//     let temp = arr[i]
//     arr[i] = arr[min];
//     arr[min] = temp
//   }
//   return arr;
// }

// ES2015 O(N**2)
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}


const selectedSort = selectionSort([34, 22, 10, 19, 17])
console.log(selectedSort)
