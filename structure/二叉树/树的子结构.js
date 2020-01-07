/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-30 15:38:09
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-30 15:38:34
 * @Description: In User Settings Edit
 */
/**
 * 输入两棵二叉树A，B，判断B是不是A的子结构。（ps：我们约定空树不是任意一个树的子结构）
 * 首先找到A树中和B树根节点相同的节点
从此节点开始，递归AB树比较是否有不同节点
 * @param {*} pRoot1 
 * @param {*} pRoot2 
 */
function HasSubtree(pRoot1, pRoot2) {
  let result = false;
  if (pRoot1 && pRoot2) {
    if (pRoot1.val === pRoot2.val) {
      result = compare(pRoot1, pRoot2);
    }
    if (!result) {
      result = HasSubtree(pRoot1.right, pRoot2);
    }
    if (!result) {
      result = HasSubtree(pRoot1.left, pRoot2);
    }
  }
  return result;
}

function compare(pRoot1, pRoot2) {
  if (pRoot2 === null) {
    return true;
  }
  if (pRoot1 === null) {
    return false;
  }
  if (pRoot1.val !== pRoot2.val) {
    return false;
  }
  return compare(pRoot1.right, pRoot2.right) && compare(pRoot1.left, pRoot2.left);
}