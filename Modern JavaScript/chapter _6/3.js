const link = document.querySelector("a");

console.log(link.getAttribute("href"));

link.setAttribute("href", "https://www.thenetninja.co.uk");
console.log(link.getAttribute("href"));
link.innerText = "The Net Ninja Website";

const mssg = document.querySelector("p");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("class", "success");
console.log(mssg.getAttribute("class"));
mssg.setAttribute("style", "color: green");

const title = document.querySelector("h1");

// title.setAttribute("style", "margin: 50px");

console.log(title.style);

title.style.margin = "50px";

title.style.color = "crimson";

title.style.fontSize = "10vh";

title.style.margin = "";
