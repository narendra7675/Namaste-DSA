//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1.

function searchElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

let arr = [4, 2, 0, 10, 8, 30];
let results = searchElement(arr, 10);
console.log(results); //3

console.log(searchElement(arr, 49)); //-1

//WAF that returns the number of negative numbers in array.

let array = [2, -9, 17, 0, 1, -10, -4, 8];
function countNegatives(arr){
    const negativeCount = arr.filter(num => num<0);
    return negativeCount.length;
}

let res = countNegatives(array);
console.log(res);//3

//OR

function countNeg(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++; //count = count+1; or ++count;
    }
  }
  return count;
}

let num = countNeg(array);
console.log(num);//3




