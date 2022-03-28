// dates and times

// creating a new object of Date type
const now = new Date();
// year, months, day , times
console.log("getFullYear", now.getFullYear());
console.log("getMonth", now.getMonth()); // it starts from 0, 2 === March
console.log("getDay", now.getDay());
console.log("getDate", now.getDate());

// timestamps
console.log("timestap: ", now.getTime());

// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
