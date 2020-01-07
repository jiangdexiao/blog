/*
 * @Author: 289608944@qq.com
 * @Date: 2019-10-21 11:24:16
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-30 14:34:59
 * @Description: In User Settings Edit
 */
// 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 import Tree from './前中后序.js'
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (array)=> {
  const tree = new Tree()
  array.map((i) => {
    tree.insert(i)
  })
  const root = tree.shift()
  const isMirror = (node1,node2) => {
    if(node1 === null && node2 === null ) return true
    if(node1 === null || node2 === null) return false
    return (node1.val === node2.val) 
    && isMirror(node1.right,node2.left)
    && isMirror(node1.left,node2.right)
  }
  return isMirror(root,root)
}