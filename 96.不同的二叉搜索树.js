/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
  // 动态规划
  // const dp = []
  // dp[0] = 1
  // dp[1] = 1

  // for (let i = 2; i <= n; i++) {
  //   let temp = 0

  //   for (let j = 1; j <= i; j++) {
  //     temp += dp[j-1]*dp[i-j]
  //   }

  //   dp[i] = temp
  // }

  // return dp[n]

  // catalan 数公式
  let C = 1;
    for (let i = 0; i < n; ++i) {
      C = C * 2 * (2 * i + 1) / (i + 2);
    }
    return C;
};
// @lc code=end

