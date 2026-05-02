//Write a function that returns the largest number in an array

function findLargest(arr) {
  let largest = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let array = [5, 0, 7, 100, 8, 17, 1];
let res = findLargest(array);
console.log(res); //100

//NOTES:

//But if we've array of [-9, 19, -3] then it returns -1 instead of -3. So, we've to use least number for largest variable initially and compare.

//let largest = -Infinity;
//OR
//We can assume our first index number is largest number.
//let largest = arr[0];

//Write a function that returns the smallest number in an array.

function findSmallest(arr) {
  let smallest = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[0];
    }
  }
  return smallest;
}

let results = findSmallest(array);
console.log(results); //5
