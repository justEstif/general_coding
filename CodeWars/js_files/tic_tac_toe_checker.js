/*
* a function the checks the current state of a tic-tac-toe game
* assume the board comes in the form of a 3x3 array
* 0 = nil
* 1 = X
* 2 = O
* [[0,0,1],
*  [0,1,2],
*  [2,1,0]]
* return -1: not yet finished and no one has won yet(there are empty spots)
* return 1: if "X" won
* return 2: if "O" won
* return 0: draw
*/

// let board = [[0, 0, 1], [0, 1, 2], [2, 1, 0]]
// let board1 = [[1, 2, 1], [1, 1, 2], [2, 2, 0]] // -1

let board2 = [[2, 1, 1], [0, 1, 1], [2, 2, 2]]  // 2
function isSolved(board) {
  let game = 0
  let diagonals = [[], []]
  for (let i = 0; i < board.length; i++) {
    diagonals[0].push(board[i][i])
    diagonals[1].push(board[i][2 - i])
  }
  for (const diagonal of diagonals) {
    if (diagonal.every(x => x === 1)) return 1
    if (diagonal.every(x => x === 2)) return 2
  }
  for (const row of board) {
    if (row.every(x => x === 1)) return 1
    if (row.every(x => x === 2)) return 2
    if (row.some(x => x === 0)) game = -1
  }
  return game;

}
let value = isSolved(board2)
console.log("expect 2")
console.log(value)
