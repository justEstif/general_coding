const form = document.querySelector('.form');
const inputs = document.getElementsByTagName('input');
const spans = document.getElementsByTagName('span');
const inputSpanObj = [];
[...inputs].forEach((input, index) => {
  inputSpanObj.push({
    input: input,
    span: spans[index],
    name: input.name,
  });
});
inputSpanObj.forEach((value) => {
  value['input'].addEventListener('input', function () {
    if (value['input'].validity.valid) {
      value['span'].textContent = '';
      value['span'].className = 'error';
      value['input'].className = '';
    } else {
      showError(value['input'], value['span']);
    }
    if (value['name'] === 'password-2') {
      value['input'].addEventListener(
        'input',
        check(value['input'], value['span'])
      );
    }
  });
});

form.addEventListener('submit', function (e) {
  inputSpanObj.forEach((value) => {
    if (!value['input'].validity.valid) {
      showError(value['input'], value['span']);
      e.preventDefault();
    }
  });
});

function showError(input, span) {
  if (input.validity.valueMissing) {
    span.textContent = `You need to enter a ${input.type} value`;
  } else if (input.validity.typeMismatch) {
    span.textContent = `Entered value needs to be a ${input.type}`;
  } else if (input.validity.tooShort) {
    span.textContent = `${input.type} should be at least ${input.minLength} characters; you entered ${input.value.length}`;
  } else if (input.validity.patternMismatch) {
    span.textContent = `input should be a valid ${input.name}`;
  }
  input.className = 'invalid';
  span.className = 'error active';
}

function check(input, span) {
  if (input.value === document.getElementById('password').value) {
    input.style.color = 'green';
    span.className = 'error';
  } else {
    input.style.color = 'red';
    span.className = 'error active';
  }
}
