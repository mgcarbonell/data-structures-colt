// charCount: return an obj with keys that are lowercase alphanumberic characters in the string.

function charCount(str){
  // make an object to return at the end
  const result = {}
  // loop over the string, for each character...
  for (let i = 0; i < str.length; i++){
    const char = str[i].toLowerCase()
    //if the char is a number/letter AND is a key in obj, add one to count
    if(result[char] > 0){
      result[char]++
    //if the char is a number/letter AND not in the obj, add it to obj and set value to 1
    } else {
      result[char] = 1;
    }
  }
    //if char is something else (space, period, etc.) don't do anything 
  return result
}
// how do we handle non alphanumeric? We plug it into our code = the logic still stands here.
// write what you can, loop through, some conditionals, we're still printing an obj with key/value
// pairs.
// So how can we refactor?

// function charCount(str) {
//   const obj = {};
//   for (let i = 0; i < str.length; i++){
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)){
//       if(obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       };
//     }
//   }
//   return obj
// }

// now how can we further refine?

// function charCount(str){
//   const obj = {};
//   for (let char of str) {
//     char = char.toLowerCase();
//     if(/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

// What else can we do? What we can do further?

// function charCount(str) {
//   const obj = {};
//   for (let char of str) {
//     if (/[a-z0-9]/.test(char)){
//       // increase the count of obj[char] OR set it to 1
//       obj[char] = ++obj[char] || 1; 
//     }
//   }
//   return obj;
// }

// Anything FURTHER? What about the RegEx?
// what about charCodeAt()?
// RegEx is not the fastest way

function charCountImproved(str) {
  const obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)){
      char = char.toLowerCase();
      // increase the count of obj[char] OR set it to 1
      obj[char] = ++obj[char] || 1; 
    }
  }
  return obj;
}


function isAlphaNumeric(char){
  let code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)){ // lower alpha (a-z)
        return false;
      }
  return true;
}

console.log(charCountImproved("The quick brown Fox"))