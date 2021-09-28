//============================ Using [CALLBACKS]
// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   console.log("delay:", delay); //Random number 0-5000

//   setTimeout(() => {
//     if (delay > 4000) {
//       failure("Connection Timeout :<");
//     } else {
//       success(`Here's your fake data from ${url}`);
//     }
//   }, delay);
// };

//============================ Using [PROMISE]
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    console.log("delay:", delay);

    setTimeout(() => {
      if (delay > 2000) {
        reject("Connection Timeout :<");
      } else {
        resolve(`Here's your fake data from ${url}`);
      }
    }, delay);
  });
};

//---------- function calls.... Using [CALLBACKS]
// fakeRequestCallback(
//   "toys.com/cat1", //arg1
//   function (response) {
//     //arg2
//     console.log("IT WORKED!");
//     console.log(response);
//   },
//   function (err) {
//     //arg3
//     console.log("ERROR!!!");
//     console.log(err);
//   }
// );

//---------- function calls.... Using [PROMISE]
//.then => Success
//.catch => Error
// fakeRequestPromise("cats.com/page1")
//   .then(() => {
//     console.log("SUCCESS!!!! (pg1)");

//     fakeRequestPromise("cat.com/page2")
//       .then((data) => {
//         console.log("SUCCESS!!!! (pg2)");
//         console.log(data);
//       })
//       .catch((err) => {
//         console.log("OH NO!!! ERROR!!! (pg2)");
//         console.log(err);
//       });
//   })
//   .catch(() => {
//     console.log("OH NO!!! ERROR!!! (pg1)");
//   });

//------ Simplify .... Using [PROMISE]

fakeRequestPromise("cats.com/page1")
  .then(() => {
    console.log("SUCCESS!!!! (pg1)");
    return fakeRequestPromise("cat.com/page2"); //POINT: adding Return
  })
  .then(() => {
    //POINT: adding .then()
    console.log("SUCCESS!!!! (pg2)");
  })
  .catch(() => {
    console.log("OH NO!!! ERROR!!!");
  });
