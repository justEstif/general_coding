function alphabetPosition(someString: string) {
  let newString: string;
  someString = someString.toUpperCase();
  for (let i = 0; i < someString.length; i++) {
    if (someString.charCodeAt(i) >= 101 && someString.charCodeAt(i) <= 132)
      newString += someString.charCodeAt(i);
  }
  return newString;
}

console.log(alphabetPosition("some string this is"));
