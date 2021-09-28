const userOne = {
  username: "Hoge",
  email: "hoge@hoge.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};

const userTwo = {
  username: "Ryu",
  email: "ryu@ryu.com",
  login() {
    console.log("the user logged in");
  },
  logout() {
    console.log("the user logged out");
  },
};

userOne.login();
userTwo.login();
