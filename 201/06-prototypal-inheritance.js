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

//Subclass of User
function Admin(username, email) {
  //Function prototype call:  calls a function with a given this value
  User.call(this, username, email); //like super in class model
}

//Creating new object
Admin.prototype = Object.create(User.prototype); //ex) creating { this }
//then make
Admin.prototype.deleteUser = function (user) {
  // delete user
};

const userOne = new User("harry", "harry@mail.com");
const userTwo = new User("tim", "tim@mail.com");
const userThree = new Admin("Eric", "eric@mail.com");

console.log(userOne);
console.log(userTwo);
console.log(userThree);

userTwo.login().logout();
