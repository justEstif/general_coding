const para = document.querySelector("p");

// console.log(para.innerText);
// para.innerText = "ninja's are awesome";

const paras = document.querySelectorAll("p");

paras.forEach((para) => {
  console.log(para.innerText);
  para.innerText += " new text";
});

const content = document.querySelector(".content");

console.log(content.innerHTML);
content.innerHTML = "<little>this is new</little)";
const people = ["mario", "luigi", "kante"];

people.forEach((person) => {
  content.innerHTML += `<p>${person}</p>`;
});
