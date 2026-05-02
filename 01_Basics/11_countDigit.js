//Write a function that returns the count of digit in a number.

function countDigits(num) {
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let number = 259;
let results = countDigits(number);
console.log(results); //3
//Notes:
//1. What if n=0 then we need to handle this case. 0 is also one Digit.
//2. What if n = -259?
//Math.abs(n); -> Math.absolute -> it changes negative number to positive number. If the number is
//already positive then it will remains in positive number.

//Math.round -> If it is 0.5 and above, it'll change it to +1.
//Math.floor -> Always make it to lower value.
//Math.ceil -> This function always increases or rounds up.
console.log(Math.ceil(10.1)); //11
console.log(Math.ceil(10.0000000001)); //11

console.log("-----Improvised code-----");

function countDig(num) {
  if (num == 0) {
    return 1;
  }
  //converting negative numbers to positive:
  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

let num = -298;
let res = countDig(num);
console.log(res); //3
