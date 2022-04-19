// store data in local storage(as string)
localStorage.setItem("name", "mario");
localStorage.setItem("age", 1);

// get data from local storage
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
// console.log(name, age);

// remove one item from local storage
// localStorage.removeItem("name");
// deletes everything in local storage
// localStorage.clear();

const todos = [
  { text: "play mariokart", author: "shaun" },
  { text: "buy some milk", author: "mario" },
  { text: "buy some bread", author: "luigi" },
];

// turn JS objects to JSON string using stringfy
// console.log(JSON.stringify(todos));

// passing in a JSON string into the local storage
localStorage.setItem("todos", JSON.stringify(todos));

const stored = JSON.parse(localStorage.getItem("todos"));
console.log(stored);
