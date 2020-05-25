/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  let len = s.length
  let dp = new Array(len + 1).fill(0)
  dp[0] = 1
  dp[1] = s[0] === '0' ? 0 : 1
  for (let i = 2; i < len + 1; i++) {
    let x = s[i-2]
    let y = s[i-1]
    let two = x + y
    if (x === '0' && y === '0') {
      dp[i] = 0
    } else if (x === '0') {
      dp[i] = dp[i-1]
    } else if (y === '0') {
      if (two > 26) dp[i] = 0
      else dp[i] = dp[i-2] 
    } else if (two > 26) {
      dp[i] = dp[i-1]
    } else {
      dp[i] = dp[i-1] + dp[i-2]
    }
  }
  return dp[len]
};
// @lc code=end

