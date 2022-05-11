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

let board = [[0, 0, 1], [0, 1, 2], [2, 1, 0]]
let board1 = [[1, 2, 1], [1, 1, 2], [2, 2, 0]] // -1
let board2 = [[2, 1, 1], [0, 1, 1], [2, 2, 2]]  // 2
function isSolved(board) {
  let diagonal1 = []
  let diagonal2 = []
  for (let i = 0; i < board.length; i++) {
    diagonal1.push(board[i][i])
    diagonal2.push(board[i][board.length - 1 - i])
  }
  console.log(diagonal1)
  console.log(diagonal2)
  for (let i = 0; i < board.length; i++) {
    if (board[i].some(x => x === 0)) return -1

    if (board[i].every(x => x === 1)) return 1
    if (board[i].every(x => x === 2)) return 2

    if (diagonal1.every(x => x === 1)) return 1
    if (diagonal1.every(x => x === 2)) return 2

    if (diagonal2.every(x => x === 1)) return 1
    if (diagonal2.every(x => x === 2)) return 2

    if (board.every(x => x !== 0)) return 0
  }
}
let value = isSolved(board2)
console.log("expect 2")
console.log(value)
