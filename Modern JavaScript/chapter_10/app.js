// get reference to form
const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const search = document.querySelector(".search input");
const generateTemplate = (todo) => {
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
  </li>`;
  list.innerHTML += html;
};

// when submit event
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // value of input on submit action
  // trim to remove whitespace before and after
  const todo = addForm.add.value.trim();
  // only if length > 0
  if (todo.length) {
    generateTemplate(todo);
    // clear form after submit
    addForm.reset();
  }
});

// delete todos
list.addEventListener("click", (e) => {
  // add click to the entire list
  if (e.target.classList.contains("delete")) {
    // select the parent li of that trash icon and remove
    e.target.parentElement.remove();
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    // return array with element that don't have that searched text
    .filter((todo) => !todo.textContent.toLowerCase().includes(term))
    // add filtered class to those that have the search term
    .forEach((todo) => todo.classList.toLowerCase().add("filtered"));

  Array.from(list.children)
    // return array with element that do have that searched text
    .filter((todo) => todo.textContent.includes(term))
    // remove filtered class
    .forEach((todo) => todo.classList.remove("filtered"));
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
