class User {
  //Constructing your object
  constructor(username, email) {
    //this: User object
    this.username = username;
    this.email = email;
  }

  //method inside of class
  login() {
    console.log(`${this.username} just logged in`);
    return this;
  }
  logout() {
    console.log(`${this.username} just logged out`);
    return this;
  }
}

//Admin(Parent) has everything User (child) has
class Admin extends User {
  deleteUser(user) {
    // delete a user with filter
    console.log("deleted user");
    return this;
  }
}

//instanciate new object/class
const userOne = new User("harry", "harry@mail.com");
const userTwo = new User("tim", "tim@mail.com");
const userThree = new Admin("Eric", "eric@mail.com", "super-admin");

// userOne.login().login(); //do not forget add 'return' for these chaining
console.log(userOne);
console.log(userThree);
// console.log(userOne.deleteUser());//Uncaught TypeError: userOne.deleteUser is not a function
// console.log(userThree.deleteUser()); //deleted user
