//Find second largest number in an array

function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let array = [4, 9, 0, 2, 8, 7, 1];
let secondLarge = secondLargest(array);
console.log(secondLarge); //8

//Notes:
//1. What if array is empty?
//2. What if array has only one element?
//Then output becomes [object object] or undefined

//Always think corner cases.
//1. Whether array has empty.
//2. Whether array has only one element.
//3. What if your array has only negative numbers. will our code handles?
//Always check all cases that does it work or not?

//let arr = [10, 20, 20];
//console.log(secondLargest(arr)); //20 ; ideally secondLargest is 10

//4. What if array has duplicates?
//If there are two duplicates of first largest then it should return me the second largest.
//You need to modify your solution accordingly and you should have your logic to think about these corner cases.

function secondLargest1(arr) {
  if (arr.length < 2) {
    return null;
  }

  let firstLargest1 = -Infinity;
  let secondLargest1 = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest1) {
      secondLargest1 = firstLargest1;
      firstLargest1 = arr[i];
    } else if (arr[i] > secondLargest1 && arr[i] != firstLargest1) {
      secondLargest1 = arr[i];
    }
  }
  return secondLargest1;
}

let arr = [10, 20, 8, 9, 3, 5, 20];
let results = secondLargest1(arr);
console.log(results); // 10
