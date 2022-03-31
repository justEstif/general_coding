const imgs = document.querySelector('.img-container');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const img = document.querySelectorAll('img');
let idx = 0;

let interval = setInterval(run, 2000);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }
  imgs.style.transform = `translateX(${idx * -500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}
leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
  resetInterval();
});
rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
