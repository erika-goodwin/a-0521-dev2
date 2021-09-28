//function constructor of user class
function User(username, email) {
  this.username = username;
  this.email = email;

  //   //method inside of function constructor
  //   this.login = function () {
  //     console.log(`${this.username} has logged in`);
  //   };
}

//creating object inside of prototype object
User.prototype.login = function () {
  console.log(`${this.username} has logged in`);
  return this;
};
User.prototype.logout = function () {
  console.log(`${this.username} has logged out`);
  return this;
};

const userOne = new User("harry", "harry@mail.com");
const userTwo = new User("tim", "tim@mail.com");
// const userThree = new Admin("Eric", "eric@mail.com", "super-admin");

console.log(userOne);
console.log(userTwo);
userOne.login(); //harry has logged in
userTwo.login(); //tim has logged in
userOne.login().logout(); // add return this
userTwo.login().logout(); // add return this
