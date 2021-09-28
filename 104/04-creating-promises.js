//Promises
const willGetYouCat = new Promise((resolve, reject) => {
  const rand = Math.random();
  console.log(rand);

  if (rand < 0.5) {
    resolve();
  } else {
    reject();
  }
});

willGetYouCat
  .then(() => {
    console.log("YAY! GOT ME A CAT");
  })
  .catch(() => {
    console.log("!< NO CAT");
  });
