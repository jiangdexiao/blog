/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-30 14:36:10
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-30 14:36:52
 * @Description: In User Settings Edit
 */
/**
 * 前序遍历：跟节点 + 左子树前序遍历 + 右子树前序遍历
  中序遍历：左子树中序遍历 + 跟节点 + 右字数中序遍历
  后序遍历：左子树后序遍历 + 右子树后序遍历 + 跟节点
  前序遍历找到根结点root
  找到root在中序遍历的位置 -> 左子树的长度和右子树的长度
  截取左子树的中序遍历、右子树的中序遍历
  截取左子树的前序遍历、右子树的前序遍历
  递归重建二叉树
 * @param {*} pre 
 * @param {*} vin 
 */
function reConstructBinaryTree(pre, vin) {
  if(pre.length === 0){
      return null;
  }
  if(pre.length === 1){
      return new TreeNode(pre[0]);
  }
  const value = pre[0];
  const index = vin.indexOf(value);
  const vinLeft = vin.slice(0,index);
  const vinRight = vin.slice(index+1);
  const preLeft = pre.slice(1,index+1);
  const preRight = pre.slice(index+1);
  const node = new TreeNode(value);
  node.left = reConstructBinaryTree(preLeft, vinLeft);
  node.right = reConstructBinaryTree(preRight, vinRight);
  return node;
}