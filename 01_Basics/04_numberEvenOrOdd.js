//Create a function to check if a number is even or odd

function isEvenOdd(num) {
  let rem = num % 2;

  if (rem === 0) {
    console.log("Even number");
  } else {
    console.log("Odd Number");
  }
}

isEvenOdd(6); //Even number
isEvenOdd(7); //"Odd Number
