/*
Write a simple solution using recursion
*/

// Fib(n) = Fib(n-1) + Fib(n-2)
// Fib(2) is 1 <= base case
// Fib(1) is 1 <= base case

function fib(n) {
  if (n <= 2) return 1; // <= base case
  return fib(n - 1) + fib(n - 2);
}

// not very efficient solution, pretty horrible tbh O(2**n)
// What's the problem here? We're repeating things over and over again.
/*
                  fib(5)
              /            \
        fib(4)              fib(3)
        /     \               /    \
    fib(3)  fib(2)         fib(1) fib(2)
    /     \
  fib(1)  fib(2)

  So if we have fib(7), it'll go through the above twice.
*/

// So what can we do to improve? Dynamic Programming + Memoization
// What's Memoization? Storing the results of expensive function calls and 
// returning the cached result when the same inputs occur again.

function fibonacci(n, memo = []) {
  // if we already found something, return the value
  if (memo[n] !== undefined) return memo[n];
  // base case
  if (n <= 2) return 1;
  let res = fibonacci(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
/*
function fib(n, memo=[undefined, 1, 1]) {
  if(memo[n] !== undefined) return memo[n];
  let res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
*/