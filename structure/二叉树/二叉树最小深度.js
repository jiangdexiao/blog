/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-30 15:02:55
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-30 15:03:50
 * @Description: In User Settings Edit
 */
/**
 * 深度优先 + 分治
 * 左右子树都不为空：左子树深度和右子树最小深度的最小值 + 1
  左树为空：右子树最小深度的最小值 + 1
  右树为空：左子树最小深度 + 1
 * @param {*} root 
 */
var minDepth = function (root) {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};