const validAnagram = (string1, string2) => {
  // first we check if the lengths are equal, because an anagram has to be the
  // same length. listen = silent, etc. etc. anagram nagaram.
  if (string1.length !== string2.length) {
    return false
  }
  // let's initialize an empty object because it's faster to iterate through it.
  const dictionary = {}

  // loop through the first string
  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    // if the letter exists, increment, otherwise set to 1
    // does letter exist in dictionary? Is that true? If true add a counter to 
    // it, otherwise add it
    dictionary[letter] ? dictionary[letter] += 1 : dictionary[letter] = 1;
  }

  // loop through the second string
  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i]
    // match letter to dictionary, if it cannot find the letter or sets it to 
    //0, not an anagram.
    if (!dictionary[letter]) {
      return false;
    } else {
      dictionary[letter] -= 1;
    }
  }
  return true
}

const string1 = "anagram"
const string2 = "nagaram"
console.log(validAnagram(string1, string2))