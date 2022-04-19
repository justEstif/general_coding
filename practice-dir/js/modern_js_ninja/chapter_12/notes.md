Async JavaScript

- governs how we perform tasks which take some time to complete
- codes that starts now and finish later
 - we use an async functions which starts and resumes once the task that takes has completed all whist the rest are occurring?
 - the statement has a callback function which completes the rest of the task
 - for example we have a number of functions 
```
function 1
function 2 : has a data request which takes time
  - we use an async function, the browser handles the request in a different stack
  - function 2 will be taken of the stack and 3 will continue
  - we pass in a callback function which we complete the rest of the task once the data request has been answered
function 3
function 4
callback
- once the stack has been cleared, the data request is received and the callback function completes function 2's task
```
JS:
- a synchronous language and single-threaded language
- fetching of data takes time = blocking code
  - multiple data requests take time 


async function places the task ond a different stack
HTTP Requests are the part of the code that will take time

What is a HTTP Requests?
- to reach out of an external server or db and get data
- We make there requests to API

Server look at HTTP Requests and sends it back as a response
- each api has its own set of endpoints
- we get back data in JSON form

create request object
add request event listener for state change
4 states: 
1 OPENED: open() has been called
2 HEADERS_RECEIVED: send has been called, and headers and  status are available
3 LOADING: Downloading; responseText holds partial data
4 DONE: The operation is complete and we have access to the data
set up request
send request

JSON: a data format that most APIs return to us
- it is just a string that looks like an JS object
- turn the JSON to JS object for access
      const data = JSON.parse(request.responseText)
  
// when making requests in a synchronous manner, it can form a code soup
// promises are use in place of such
Promises:
- is basically something which will take sometime to do
- will to either: 
  1. resolved = we get the data we want
  2. rejected = we get an error and the data isn't resolved
- we typically do the request in the Promise function body
promise has takes two parameters = (resolve, reject) that are built into the promise api
if the data is resolved, we pass it into the resolve function

the returned Promise function has a `then` method that will be fire after the Promise has resolved and use it to handle the data

// we will use arrow functions 
the two parameters of then are used to handle if the promise resolves or rejects the data
returnsPromise().then(function resolveHandle, function rejectHandle)

fetch api: new way of fetching api
- returns Promise instead of having to type out the promise within
- only rejected when there is a network error 
- a promise represents something that has not been completed yet

Async and Await

- allow easier and more legible way of promise chaining
  - promises are things that will take time. they will either be resolved or rejected
  - they are part of the way we handle 
- using async we can section of all of our async funciton and then use the await keyword inside to chain promises in a logical way
- async always returns a promise
- when using async we can use the await keyword instead of the then keyword
- when we put await in front of a word, it waits until the promise has been resolved(or rejected) before assigning the return
- we are only stalling inside the async function and not the entire program


The main idea of Async and the tools of this chapter

keywords
API: we use HTTP request to get some data from them
JSON: the way data is sent from DB, just a string but looks like JS object
HTTP requests: take time and if we simply use JS as is, it is synchrous and single threaded so it will take a long time to retreive data
old way
use XML... method and we have to create promises and then and promise chaining 
promise
stuff that haven't happened yet
either rejected or resolved
fetch
new JS function to retreive from api 
return a promise 
then
if data is retireved or else catch errr
async await
two keywords used to handle async function in JS
async says the function is async and everything that goes on within that function is separate from the other functions
await waits before assigning the returned data to variables