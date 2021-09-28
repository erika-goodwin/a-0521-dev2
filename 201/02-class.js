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

//instanciate new object/class
const userOne = new User("harry", "harry@mail.com");
const userTwo = new User("tim", "tim@mail.com");

// console.log(userOne.username);
// console.log(userTwo.username);
console.log(userOne);
console.log(userTwo);
console.log(userOne.login());
console.log(userOne.logout());
console.log(userTwo.login());
console.log(userTwo.logout());

userOne.login().login(); //do not forget add 'return' for these chaining

//the 'new' keyword
//1 - it creates a new empty object { }
//2 - it binds the value of 'this' to the new empty object
//3 - it calls the constructor function to 'build' the object
