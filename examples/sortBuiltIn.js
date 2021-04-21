/*
:)
["Mario", "C", "Likes", "To", "Keep", "It", "Clean"].sort();
=> ["C", "Clean", "It", "Keep", "Likes", "Mario", "To"] 

:(
[15, 10, 6, 4].sort();
=> [10, 15, 4, 6]

JS default sort is unicode code point values. It converts everything to a string first.

We can tell JS how to sort it using an optional comparator function (remember that hacker rank problem?). You can use this comparator function to tell JS how to sort it. The comparator looks at pairs of elements (a && b), determines their sort order based on a return value.
  * if it returns a negative number, a should come before b
  * if it returns a positive number, a comes after b
  * if we return 0, a and b are the same.
  * .sort((a, b) => a - b)
*/

function numberCompare(num1, num2) {
  return num1 - num2;
}
let numSort = [6, 4, 15, 10].sort(numberCompare)

console.log(numSort)

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

let strSort = ['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort(compareByLen)

console.log(strSort)