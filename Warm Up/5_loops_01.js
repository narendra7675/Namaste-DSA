//Print all even numbers in the array

let array = [10, 6, 5, 0, 8, 3, 80];
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    console.log(array[i]);
  }
}

//output:
//10
// 6
// 0
// 8
// 80

//Print all the odd numbers in the array
let arr = [10, 6, 5, 0, 8, 3, 80];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 1) {
    console.log(arr[i]);
  }
}
//Output:
// 5
// 3