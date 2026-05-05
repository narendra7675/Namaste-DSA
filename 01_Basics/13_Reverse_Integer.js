/**
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2 power 31, 2 power 31-1] then return 0.
 * 
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned)
 * 
 * Example 1: 
 * Input: x=123
 * Output: 321
 * 
 * Example 2:
 * Input: x = -123
 * Output: -321
 * 
 * Example 3:
 * Input: x = 120
 * Output:21
 */

//Notes:
/**
 * When we say 32-bit integer range, the value should be not less than (-2 power 31) and should not be greater than (2 power 31 - 1).
 * 
 * 2 power 31 = 2147483648
 * 
 * If my reverse value less than -2147483648 or greater than 2147483648-1 = 2147483647. If reverse number falls outside this range then you have to return 0.
 */