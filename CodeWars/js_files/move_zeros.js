function moveZeros(arr) {
  let revArr = arr.reverse();
  let newArr = [];
  for (let i = 0; i < revArr.length; i++) {
    revArr[i] === 0 ? newArr.unshift(0) : newArr.push(revArr[i]);
  }
  return newArr.reverse();
}
exports.moveZeros = moveZeros;
