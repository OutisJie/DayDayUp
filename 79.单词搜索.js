/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let m = board.length
  let n = board[0].length

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = board[i][j]
      if (word[0] === cur) {
        let start = board[i][j]
        board[i][j] = '*'
        let pos = 1
        let pass = backtrack(board, m, n, i, j, word, pos, start)
        if (pass) return true
      }
    }
  }
  return false
};
var backtrack = function (board, m, n, i, j, word, pos, start) {
  let pass = false
  if (pos === word.length) {
    return true
  }
  // up i - 1
  if (i - 1 < 0) pass = false// out
  else if (board[i - 1][j] === word[pos]) {
    let temp = board[i - 1][j]
    board[i - 1][j] = '*'
    pass = backtrack(board, m, n, i - 1, j, word, pos + 1, temp)
  }
  if (pass) return true
  // right j + 1
  if (j + 1 >= n) pass = false // out
  else if (board[i][j + 1] === word[pos]) {
    let temp = board[i][j + 1]
    board[i][j + 1] = '*'
    pass = backtrack(board, m, n, i, j + 1, word, pos + 1, temp)
  }
  if (pass) return true
  // down i + 1
  if (i + 1 >= m) pass = false // out
  else if (board[i + 1][j] === word[pos]) {
    let temp = board[i + 1][j]
    board[i + 1][j] = '*'
    pass = backtrack(board, m, n, i + 1, j, word, pos + 1, temp)
  }
  if (pass) return true
  // left
  if (j - 1 < 0) pass = false// out
  else if (board[i][j - 1] === word[pos]) {
    let temp = board[i][j - 1]
    board[i][j - 1] = '*'
    pass = backtrack(board, m, n, i, j - 1, word, pos + 1, temp)
  }
  if (pass) return true

  if (!pass) {
    board[i][j] = start
  }

  return pass
}
// @lc code=end

