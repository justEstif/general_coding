const form = document.querySelector('.form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.error');

email.addEventListener('input', function () {
  if (email.validity.valid) {
    // if valid
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});
form.addEventListener('submit', function (event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

function showError() {
  // if empty
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an email address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}`;
  }
  emailError.className = 'error active';
}
