let numbers = [10, -30, 20, 50];
let allPositive = numbers.every(function (number) {
  return number > 0;
});

const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John  Carte', age: 50 },
];

let indexValue = -1;

const employee = employees.some(function (employee, index) {
  const isFound = employee.name.includes('John');
  if (isFound) indexValue = index;
  return isFound;
});
console.log(employee, index);
