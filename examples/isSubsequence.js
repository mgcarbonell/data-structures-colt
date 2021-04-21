/*
  Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appears somehwere in the second string, WITHOUT CHANGING THEIR ORDER.
*/

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;

  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str2.length) return true;
    j++
  }
  return false;
}