function snailSort(bigArr) {
  let newArr = []
  let arrOne = []
  let arrLast = []
  bigArr.map(el => {

  })
  while (bigArr) {
    switch (bigArr.length) {
      case 1:
        bigArr.map(e => {
          newArr.push(e)
        })
        bigArr = null
        break;
      default:
        arrOne = bigArr[0];
        arrLast = bigArr[bigArr.length - 1].reverse();
        arrOne.map(e => {
          newArr.push(e)
        })
        arrLast.map(e => {
          newArr.push(e)
        })
        bigArr.shift().pop()
    }
  }
  return newArr
}

let example = [
  [1, 2],
  [4, 5],
];
let result = snailSort(example);
console.log(result)
exports.snailSort = snailSort;
