// takes in a path or api
const getTodos = (resource) => {
  return new Promise((resolve, reject) => {
    // making a HTTP Request Object
    const request = new XMLHttpRequest();
    // open two parameters: request method, API endpoint
    request.open("GET", resource);
    // sending the request
    request.send();
    // add event listener to request
    request.addEventListener("readystatechange", () => {
      // we check if it is ready and if there have been no errors (200)
      if (request.readyState === 4 && request.status === 200) {
        // change the JSON to JS objects
        const data = JSON.parse(request.responseText);
        // we resolve the data as it has been fetched
        resolve(data);
      }
      // if there was an error, then the data has to be rejected
      else if (request.readyState === 4) {
        reject("error getting resource");
      }
    });
  });
};
// return a promise and we handle the resolve case with then and catch the error
getTodos("todos/luigi.json")
  .then((data) => {
    console.log("promise resolved", data);
    return getTodos("todos/mario.json");
  })
  .then((data) => {
    console.log("promise 2 resolved:", data);
    return getTodos("todos/shaun.json");
  })
  .then((data) => {
    console.log("promise 3 resolved: ", data);
  })
  .catch((err) => {
    console.log("promise rejected:", err);
  });
// function callback(err, data) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// }
// the http request happens at the end and doesn't pause the entire application

// promise example
// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something, make a network request

//     // if we fetch some data and it a success we call resolve
//     resolve("some data");
//     // if there is an error
//     reject("some error");
//   });
// };

// this way uses the two parameters of the then method
// first parameter to handle the resolve and the second to handle the reject
// getSomething().then(
//   (data) => {
//     // takes the data
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

// this way uses the first parameter of the then method - the resolve
// then if there is an error, it catch there error and handles it
// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
