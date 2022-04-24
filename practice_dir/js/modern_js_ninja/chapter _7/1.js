const form = document.querySelector(".signup-form");
const feedback = document.querySelector(".feedback");
// global regex pattern
const userPattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener("submit", (e) => {
  e.preventDefault(); // the default is to refresh
  // console.log(username.value);
  // we can access form input using the id or name
  const username = form.username.value;
  const userPattern = /^[a-zA-Z]{6,12}$/;
  let result = userPattern.test(username);
  if (result) {
    feedback.textContent = "valid username";
  } else {
    feedback.textContent =
      "invalid username: must be 6-12 charcters, lowercase letters only";
  }
});

// live feedback: uses the keyup event
form.username.addEventListener("keyup", (e) => {
  // two ways to get the form value
  // console.log(e.target.value, form.username.value);

  // don't have to word about var name change
  const username = e.target.value;
  let result = userPattern.test(username);
  if (result) {
    form.username.setAttribute("class", "success");
  } else {
    form.username.setAttribute("class", "error");
  }
});
