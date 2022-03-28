const people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

const ul = document.querySelector(".people");
let html = ``;
people.forEach((person) => {
  html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;
