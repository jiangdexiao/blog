/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-30 15:29:36
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-30 15:29:59
 * @Description: In User Settings Edit
 */
/**
 * 若一颗二叉树是不完全的，我们至少需要两个遍历才能将它重建（像题目重建二叉树一样）
但是这种方式仍然有一定的局限性，比如二叉树中不能出现重复节点。
如果二叉树是一颗完全二叉树，我们只需要知道前序遍历即可将它重建。
因此在序列化时二叉树时，可以将空节点使用特殊符号存储起来，这样就可以模拟一棵完全二叉树的前序遍历
在重建二叉树时，当遇到特殊符号当空节点进行处理
 * @param {*} pRoot 
 * @param {*} arr 
 */
function Serialize(pRoot, arr = []) {
  if (!pRoot) {
    arr.push('#');
  } else {
    arr.push(pRoot.val);
    Serialize(pRoot.left, arr)
    Serialize(pRoot.right, arr)
  }
  return arr.join(',');
}

function Deserialize(s) {
  if (!s) {
    return null;
  }
  return deserialize(s.split(','));
}

function deserialize(arr) {
  let node = null;
  const current = arr.shift();
  if (current !== '#') {
    node = { val: current }
    node.left = deserialize(arr);
    node.right = deserialize(arr);
  }
  return node;
}