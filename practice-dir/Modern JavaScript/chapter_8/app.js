const correctAnswers = ["B", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // scroll to top
  scrollTo(0, 0);
  // remove display-none class
  result.classList.remove("d-none");

  // start from 0 and count up to current score
  let output = 0;
  // class that will count up every 10ms (quick animation)
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    // stop when the output === score
    if (output === score) {
      clearInterval(timer);
    }
    // else add to the output
    else {
      output++;
    }
  }, 10);
});
