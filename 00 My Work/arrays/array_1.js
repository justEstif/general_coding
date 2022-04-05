const months = ['January', 'February', 'March', 'April'];

months.forEach(function (month) {
  month.toLowerCase();
});
// console.log(month)

const transformedArray = months.map(function (month) {
  return month.toUpperCase();
});
// console.log(transformedArray);

const users = [
  { first_name: 'Mike', last_name: 'Sheridan' },
  { first_name: 'Tim', last_name: 'Lee' },
  { first_name: 'John', last_name: 'Carte' },
];

const userList = users.map(function (user) {
  return `$${user['first_name']} ${user['last_name']}`;
});
