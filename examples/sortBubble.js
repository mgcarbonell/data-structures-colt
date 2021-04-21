// Not the most efficient
// Not the most widely used
// Some optimizations can be made
// understanding it will help us know why not to use
// BubbleSort is an sorting algorithm where the larger values "bubble to the top"

//Psuedocode:
// Start looping from the end of the array towards the beginning with variable i
// Start an inner loop with a variable called j from the beginning until i - 1
// If arr[j] is greater than arr[j+1], swap those two values!
// return the sorted array

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

/*
// ES 2015 version

function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
*/


//Optimized Version!

function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr
}