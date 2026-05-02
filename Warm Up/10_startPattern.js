let n = 4;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
  }
  console.log(row);
}

//i is responsible for how many rows we have.
//j is responsible for how many columns we have.

//output:
// ****
// ****
// ****
// ****

console.log("----2nd-----");
//Print
// *
// **
// ***
// ****

for (let i = 0; i < 4; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}
// Notes:
// 1. * - In first iteration, j loop should run for one time.
//2. ** - In 2nd iteration, j loop should run for 2 times.
//3. *** - In 3rd iteration, j loop should run for 3 times.
//4. **** - 4th iteration, 4 times.

//Print:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
console.log("-----3rd-----");
let m = 5;

for (let i = 0; i < m; i++) {
  let count = "";
  for (let j = 0; j < i + 1; j++) {
    //let j=0; j<=i; j++
    count = count + (j + 1);
  }
  console.log(count);
}

//Output:
// 1
// 12
// 123
// 1234
// 12345
console.log("----4th-----");
//Print
// 1
// 22
// 333
// 4444
// 55555

for (let i = 0; i < 5; i++) {
  let count = "";
  for (let j = 0; j < i + 1; j++) {
    count = count + (i + 1);
  }
  console.log(count);
}

//OR

for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row = row + i;
  }
  console.log(row);
}

console.log("-----5th-----");
//Print
// 12345
// 1234
// 123
// 12
// 1

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

console.log("-----6th-----");

//Print
// *****
// ****
// ***
// **
// *

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - i; j++) {
    row = row + "*";
  }
  console.log(row);
}

console.log("-----7th-----");

//Print
//     *
//    **
//   ***
//  ****
// *****

for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + "-";
  }
  for (let k = 0; k < i + 1; k++) {
    row = row + "*";
  }
  console.log(row);
}

//Output:
// ----*
// ---**
// --***
// -****
// *****
//Notes:
// ----* -> contains 4 empty spaces and 1 start
// ---** -> contains 3 empty spaces and then 2 stars
// --*** -> contains 2 empty spaces and then 3 stars
// -**** -> contains 1 empty space and then 4 stars
// ***** -> contains all stars
console.log("-----8th-----");
//Print:
// 1
// 10
// 101
// 1010
// 10101
// 101010

for (let i = 0; i < 6; i++) {
  let row = "";
  let toggle = 1;
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}

console.log("-----9th-----");
//Print
// 1
// 01
// 010
// 1010
// 10101

let x = 5;
let toggle1 = 1;
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle1;
    //switch the toggle
    if (toggle1 == 1) {
      toggle1 = 0;
    } else {
      toggle1 = 1;
    }
  }
  console.log(row);
}
