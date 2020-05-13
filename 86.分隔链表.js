/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let temp1 = []
  let temp2 = []
  let current = {
    next: head
  }
  while (current.next) {
    current = current.next
    if (current.val < x) {
      temp1.push(current.val)
    } else {
      temp2.push(current.val)
    }
    // temp.push(current.val)
  }
  let temp = [].concat(temp1, temp2)
  
  let dumyhead = {
    next: null
  }
  let cur1 = dumyhead
  temp.forEach(e => {
    let node = {
      val: e,
      next: null
    }
    cur1.next = node
    cur1 = node
  })
  return dumyhead.next
};
// @lc code=end

