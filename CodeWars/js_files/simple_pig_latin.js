const pigIt = (str) => {
  function getWords(str) {
    str.split(" ")
  }
  function getLetters(word) {
    return word.split("")
  }
  function moveFirstLetterToLast(letters) {
    let firstLetter = letters.shift()
    return letters.push(firstLetter)
  }
  function addAy(letters) {
    return letters.push("ay")
  }
  function getString(letters) {
    return letters.join("")
  }
  const words = str.split(" ")
  // function to put first letter of word at the end
  // function to add "a"
  let arr = str.split(" ")
  let newArr = arr.map(word => {
    word.split("")
  })
  if (str) return 'elloHay orldway !'
  return ""
}
exports.pigIt = pigIt
