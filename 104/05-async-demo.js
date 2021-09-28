async function hello() {
  if (false) {
    throw "goodbye!";
  }
  return "WASSUP";
}

// hello()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => console.log(err));

// ================================ using async function

const login = async (username, password) => {
  //validation
  if (!username || !password) throw "Missing Credentials";
  if (password === "corgishortie") return "WELCOME!";

  throw "Invalid Password";
};

// login("todd", "corgish  ortie")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ========================================= async/await

const fakeRequest = (url) => {
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

async function makeRequest() {
  try {
    let data1 = await fakeRequest("/page1");
    console.log(data1);
    let data2 = await fakeRequest("/page2");
    console.log(data2);
  } catch (err) {
    console.log(err);
  }
}

// makeRequest();
