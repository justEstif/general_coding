class User {
  constructor(name, email) {
    this.username = name;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(this.username + " just logged in");
    return this;
  }
  logout() {
    console.log(this.username + " just logged out");
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(this.username + " has a score of " + this.score);
    return this;
  }
}

// creating a subclass
class Admin extends User {
  // since we created this constructor, the User constructor will not start
  // the consstructor allows us to add other properties to the instance
  // we then use super to add to the parent class so that we have access to the parent class methods
  constructor(username, email, title) {
    // super passes in the values to the parent class
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter((u) => u.username !== user.username);
  }
}

const userOne = new User("mario", "gmail");
const userTwo = new User("shaun", "email");
const userThree = new Admin("admin", "amail", "king");
let users = [userOne, userTwo, userThree];
console.log(userThree);
