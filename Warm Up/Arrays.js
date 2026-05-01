//arrays contains indexes and values
let arr = ['narendra', 7, 'deepika', -3, true, 'xyz', false];
console.log(arr[6]); //false

//arra can contains array also
let array = ['narendra', 7, [5,10]];
console.log(array[2]);//5,10
console.log(array[2][0]);//5

let a = ["narendra", 7, [5, 10,[2,30]]];
console.log(a[2][2][1]);//30