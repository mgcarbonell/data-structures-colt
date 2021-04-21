function collectOddvalues(arr) {

  let result = []
  // we'd need a helper function within in here, because if we kept calling the function, each time it would be called result would be emptied out because of us initializing it as an empty variable.
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }
    // call helper on everything in that array except for the 1st element.
    helper(helperInput.slice(1))
  }

  helper(arr)

  return result
}

// Pure Recursion Example

function collectOddValues2(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  console.log(newArr)
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  console.log(newArr)
  
  return newArr;
}

console.log(collectOddValues2([1,2,3,4,5,6,7]))