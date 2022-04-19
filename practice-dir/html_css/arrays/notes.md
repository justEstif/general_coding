forEach vs map

- forEach (loops through array and makes changes)

  - loops over an array and passes the element (and optionally its index and the array itself into the function)
  - it returns undefined

- map (here is a new array with applied changes)
  - loops over an array and (does the same as forEach)
  - returns a new function and doesn't change the original

find, findIndex, filter

- find (here is the first element that matches)
  - returns the first element that returns true to the boolean statement
- findIndex (here is the index of the first match)
  - return the index of the first match
- filter (here is a new array without those that match)
  - returns a new array of all the matches(or an empty array if no match)

every, some

- every (do all pass the test?)
  - if all elements of the array pass the provided test condition returns true,
    else returns false
  - you can use to test if all form inputs have been filed
- some (does at least onee pass the test?)
  - if at least one element that passes the provided test condition returns
    true, else false
  - the returned value has to be boolean so you can store the test condition
    into a variable and do something (pass the value that returns true into a
    function) before the return statement itself
- reduce
  - executes a reducer function(that you provide) on each element of the array, resulting in a single output value
  - summing all the numbers in the array
  - parameters: accumulator, number, index and array
    - accumulator: will contain the initalValue to be used for the array
      - the initalValue determines the return type
      - think of the accumular that will be applied to the final result
    - number: the second parameter to the callback function that will contain
      the array element during each iteration of the loop
