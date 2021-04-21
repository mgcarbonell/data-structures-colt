// Write a function called same, which accepts two arrays.
// The function should return true if every value in the
// array has its corresponding value square in the second
// array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) => true
// same([1, 2, 3], [1, 9]) => false
// same([1, 2, 1], [4, 4, 1]) => false, the frequency is not the same

// a normal solution
function sameOne(arr1, arr2){
  // we already know that if the arrays are not the same length, it's a no go.
  if(arr1.length !== arr2.length){
    return false;
  }
  // we set up our loop
  for (let i = 0; i < arr1.length; i++){
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if(correctIndex === -1) {
      return false;
    }
    // splice so that each time it removes the tested index
    arr2.splice(correctIndex,1)
  }
  return true;
}

console.log(sameOne([1,2,3,2], [9,1,4,4]))

// refactored
function sameTwo(arr1, arr2){
  if(arr1.length !== arr2.length){
    return false
  }
  // We're using the object to break down the contents of a string or an array
  // and then we are comparing them.
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1){
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2){
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  
}