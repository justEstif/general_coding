const div = document.querySelector("div.error");

const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  console.log(para);
});
const errors = document.querySelectorAll(".error");
errors.forEach((err) => {
  console.log(err);
});

// get an element by ID
const title = document.getElementById("page-title");
// get an element by class name
const errors = document.getElementsByClassName("error");
// get an element by tag name
const tagN = document.getElementsByTagName("p");
