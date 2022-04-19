// constructor without class
function User(username, email) {
  this.username = username;
  this.email = email;

  // we can add functions in the constructor
  // we usually add functions in the prototype
}
// attaching methods to the prototype
User.prototype.login = function () {
  console.log(this.username + " logged in");
  return this;
};
User.prototype.logout = function () {
  console.log(this.username + " logged out");
  return this;
};
function Admin(username, email, title) {
  // call is used to call the constructor and pass in the variables and context
  // call(context, the variables to pass to the User constructor)
  User.call(this, username, email);
  this.title = title;
}

// we set the Admin prototype to a copy to the User prototype
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function () {
  // function to delete user
};
const userOne = new User("Mario", "marioEmail");
const userTwo = new User("Shaun", "shaunEmain");
const admin = new Admin("Admin", "adminEmail", "king");

userOne.login();
userTwo.logout();
