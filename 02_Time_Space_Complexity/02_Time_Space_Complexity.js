//Understand how to analyze code performance using time complexity
/**
 * It is used to measure efficiency of algorithm in terms of speed, as the input size grows.
 *
 * Time complexity != Time taken by algorithm
 * Time taken is not the right parameter to define the efficiency of algorithm.
 * What is the speed & efficiency when your input size grows, that is an important thing.
 */

/**
 * Linear Search:
 * [2, 1, 3, 5, 4, 7]
 * search(5)
 * no.of elements = 6 then loop runs 6 times.
 * If n elements in array then loop runs n times. [ n elements, then n times]
 *
 * n = 100 then loop runs 100 times.
 * n = 1000 then loop runs 1000 times.
 */

/**
 * Binary Search:
 * [1, 3, 4, 7, 9, 10, 15]
 * search (15)
 *
 * 1. Whenever you're giving an array, it's a sorted array.
 * Note: It only works on sorted array. This is very important use case that array should be sorted.
 *
 * [1, 3, 4, 7, 9, 10, 15]
 * search(10)
 * Search for 10 whether it's available in array or not.
 *
 * 1. I'll findout the middle element of this array. What is the middle element of this array? The middle element of this array is 7.
 * I'll compare the 7 with the number I want to search. It's 15.
 * If it is not equal ( if 7 = 15), I'll see whether the number I want to find is greater than 7 or less than 7.
 * I want to find 15 is greater than 7 that means my number will obviously on right hand side of my array.
 * [1, 3, 4, 7, 9, 10, 15]
 *              ---------
 * I'll reduce main array [9, 10, 15]-> and again it'll findout middle element of this array.
 * [9, 10, 15]
 *    ----
 * and then I'll see whether my number that I need to search is equivalent or not.
 * It is equal, so it will return.
 * Only in two steps I have got my answer is 15.
 *
 *
 *
 * ----------------
 * [1, 3, 4, 7, 9, 10, 15]
 * search(15)
 * 15=7 or 15<7 or 15>7
 *
 * [9,10,15]
 * search(15)
 * 15=10 or 15>10 or 15<10
 *
 * [15]
 * search(15)
 * 15=15 or 15>15 or 15<15
 * This is how we have to find number in binary search.
 *
 *
 * Suppose when I sorted with n elements, now with every iteration, everytime my loop runs, my number of array becomes n/2 then it becomes n/4 then it becomes n/8......Basically we're kind of dividing array as and when I'm looping through the array
 *
 * Basically whenever I'm looping through things, we're just dividing my sample space.
 * = n/2, n/4, n/8, n/16 ----- 1
 * = n/2 * 1/2 * 1/2 ---- x = 1
 * 
 * n/2 power of x, x = no.of times you're dividing this array
 *  n/2 power x = 1
 * n = 2 power of x
 * 
 * log of n base of 2 = x
 * 
 * Whenever we say log of n base 2 that means we're dividing an array by 2 every time.
 * Suppose if I was diving my array by 3 everytime, my base would comes become 3.
 * 
 * log2(1000) = 9.965 equivalent to 10.
 * log 2 (100) = 6.64 whcih is to 7.
 */
