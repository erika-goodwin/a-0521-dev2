//================================Call Stuck

// function multiply(x, y) {
//   return x * y;
// }

// function square(x) {
//   const toBeMultiplied = multiply(x, x);
//   return toBeMultiplied;
// }

// function isRightTriangle(a, b, c) {
//   console.log(square(a) + square(b) === square(c)); //aˆ2 + bˆ2 = cˆ2
//   return square(a) + square(b) === square(c);
// }
// isRightTriangle(3, 4, 5); //true

//================================Brake point
// console.log("1st");
// alert("brake point");
// console.log("2nd");

//================================
console.log("first");

setTimeout(function () {
  console.log("second");
}, 3000);
console.log("third");
