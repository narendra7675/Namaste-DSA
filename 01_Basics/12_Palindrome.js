/**
 * Palindrome Number:
 * An integer is a palindrome when it reads the same forward and backward.
 * for example, 121 is a palindrome while 123 is not.
 * 121 -> from left to right, its 121.
 *     -> from right to left, it's 121.
 * 1443441 -> read it reverse, its a palindrome.
 * 143, reverse of 143 -> 341. It's not palindrome.
 *
 * reverse of number == number then we can say as palindrome number.
 */

/**
 * How do you find last digit from number?
 * number % 10 = last digit
 * number / 10 = removing last digit
 */

/**
 * n % 10 and n / 10, these are two different arithmetic operators used in programming and mathematics.
 *
 * 1. Modulus Operator %
 * n % 10 gives the remainder after dividing n by 10.
 *
 * Example:
 * 57 % 10 = 7
 * 123 % 10 = 3
 *
 * why?
 * Because
 * 57 % 10 = 5 remainder 7
 * 123 % 10 = 12 remainder 3
 * Common use cases:
 * 1. Getting the last digit of a number.
 * 2. Checking even/odd numbers.
 * Cyclic logic (like wrapping values)
 *
 *
 *
 * 2. Divison Operator /
 * n / 10 gives the quotient after dividing n by 10.
 * Example:
 * 57 / 10 = 5.7
 * In integer division (many programming languages): 57 / 10 = 5
 *
 * Common use cases:
 * 1. Scaling values.
 * 2. Calculating averages.
 * 3. Removing digits from a number (integer division)
 */

//Question:
/**
 * Given an integer x, return true if x is a palindrome and false otherwise.
 *
 * Example 1:
 * Input: x = 121
 * Output: true
 * Explanation: 121 reads as 121 from left to right and from right to left.
 *
 * Example 2:
 * Input: x = -121
 * Output:false
 * Explanation: From left to right, it reads -121. from right to left it becomes 121-. Therefore, it is not a palindrome.
 */

/**
 * @param {number} x
 * @returns {boolean}
 */

let isPalindrome = function (n) {
  if (n < 0) return false;

  let nCopy = n;
  let rev = 0;

  while (n > 0) {
    let rem = n % 10;
    rev = 10 * rev + rem;
    n = Math.floor(n / 10);
  }
  // if (rev == nCopy){
  //     return true;
  // }
  // else{
  //     return false;
  // }

  return rev === nCopy;
};

let n = 1445441;
console.log(isPalindrome(n));
