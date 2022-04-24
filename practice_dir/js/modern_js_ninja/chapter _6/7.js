const copy = document.querySelector(".copy-me");
copy.addEventListener("copy", () => console.log("gotcha"));

const box = document.querySelector(".box");
box.addEventListener("mousemove", (e) => {
  box.textContent = `${e.screenX}, ${e.screenY}`;
});

document.addEventListener("wheel", (e) => {
  console.log(e);
});
