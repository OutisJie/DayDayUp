/*
 * @lc app=leetcode.cn id=90 lang=javascript
 *
 * [90] 子集 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  const list = [];
  helper(nums.sort((a, b) => a - b), list, [], 0)
  return list
};

var helper = function (nums, res, temp, start) {
  res.push(temp);
  for (let i = start; i < nums.length; i++ ){
    if (i > start && nums[i] === nums[i - 1]){
      continue;
    }
    temp.push(nums[i]);
    helper(nums, res, [...temp], i + 1);
    temp.pop();
  }
}
// @lc code=end

