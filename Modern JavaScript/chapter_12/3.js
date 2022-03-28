// async & await

// adding async in front of the brackets makes it async function

const getTodos = async () => {
  const response = await fetch("todos/luigi.json");
  // we throw an error or else JS will just make up an error
  if (response.status !== 200) {
    throw new Error("Cannot fetch");
  }
  // await
  const data = await response.json();
  return data;
};
getTodos()
  .then((data) => {
    console.log("resolved: ", data);
  })
  .catch((err) => {
    console.log("error", err.message);
  });
// fetch api
// fetch("todos/luigi.json")
//   .then((response) => {
//     // fetch returns a Resolve object with a json method that can be used to access the data inside of it
//     console.log("resolved");
//     // this is a promise
//     return response.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch((err) => {
//     console.log("rejected", err);
//   });
