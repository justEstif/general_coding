const clock = document.querySelector(".clock");
// updates the browser with the latest time
const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const html = `
  <span>${h}:</span>
  <span>${m}:</span>
  <span>${s}</span>
  `;
  clock.innerHTML = html;
};

setInterval(tick, 100);
