/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) {
    return []
  }
  return helper(1, n)
};

var helper = function (left, right) {
  const all_trees = []
  if (left > right) {
    all_trees.push(null)
    return all_trees
  }

  for (let i = left; i <= right; i++ ) {
    const left_trees = helper(left, i - 1)
    const right_trees = helper(i + 1, right)

    for (let l of left_trees) {
      for (let r of right_trees) {
        const current_tree = new TreeNode(i)
        current_tree.left = l
        current_tree.right = r
        all_trees.push(current_tree)
      }
    }
  }
  return all_trees
}
// @lc code=end

