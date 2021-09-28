//======================(1) Change Every 1s: Red -> Orange -> Yellow
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
// }, 1000); //second one:timer
// setTimeout(() => {
//   document.body.style.backgroundColor = "orange";
// }, 2000);
// setTimeout(() => {
//   document.body.style.backgroundColor = "yellow";
// }, 3000);

//======================(2) Change Every 1s : Call Back Hell
// setTimeout(() => {
//   document.body.style.backgroundColor = "red";
//   setTimeout(() => {
//     document.body.style.backgroundColor = "orange";
//     setTimeout(() => {
//       document.body.style.backgroundColor = "yellow";
//       setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//         setTimeout(() => {
//           document.body.style.backgroundColor = "blue";
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

//======================(3) Update with Function
// const delayedColorChange = (newColor, delay, next) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = newColor;
//     if (next) {
//       next();
//     }
//     // next && next()
//   }, delay);
// };

// // delayedColorChange("red", 1000);

// //Still call back hell
// delayedColorChange("red", 1000, () => {
//   delayedColorChange("orange", 1000, () => {
//     delayedColorChange("blue", 1000, () => {
//       delayedColorChange("green", 1000, () => {});
//     });
//   });
// });

//======================(4) Rough idea of promises
searchApi("www.google.com/api/books", (data) => {
  // saveToDB(data, success, error)
  saveToDB(
    data,
    () => {
      //if it works... execute some statement
    },
    () => {
      //if it fails... throw an error on the log
    }
  );
});
