/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  let res = []
  let stack = []
  let cur = root
  while (cur) {
    if (cur.left) {
      stack.push(cur)
      cur = cur.left
    } else if (!cur.right) { // cur 的左右指针都是空
      res.push(cur.val)
      cur = stack.pop()
      if (cur) cur.left = null
    } else if (cur.right) { // 左树完成遍历
      res.push(cur.val)
      cur = cur.right
    }
  }
  return res
};

// @lc code=end

