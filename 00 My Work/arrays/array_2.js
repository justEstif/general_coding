const employees = [
  { name: 'David Carlson', age: 30 },
  { name: 'John Cena', age: 34 },
  { name: 'Mike Sheridan', age: 25 },
  { name: 'John  Carte', age: 50 },
];

const john = employees.find((employee) => {
  return employee.name.includes('John');
});
// console.log(john);

const mikeIndex = employees.findIndex((employee) => {
  return employee.name.includes('Mike');
});
// console.log(mikeIndex);

const johns = employees.filter((employee) => {
  return employee.name.includes('John');
});
