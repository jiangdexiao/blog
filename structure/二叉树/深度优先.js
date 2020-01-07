/*
 * @Author: 289608944@qq.com
 * @Date: 2019-10-21 17:13:05
 * @LastEditors  : 289608944@qq.com
 * @LastEditTime : 2019-12-30 15:01:56
 * @Description: In User Settings Edit
 */
/**
 * 深度优先搜索(DFS) 非递归
 * @param {*} tree 
 */
function deepTravel(tree){
  let stack = []
  let nodeList = []
  tree && stack.push(tree)

  while(stack.length){
    let node = stack.pop() //出栈
    nodeList.push(node)
    let children = node && node.children?node.children:[]
    for(let i=children.length;i>=0;i--){
      stack.push(children[i])
    }
  }
  return nodeList
}

/**
 * 深度优先搜索(DFS) 递归
 * @param {*} tree 
 * @param {*} nodeList 
 */
function deepTravel(tree,nodeList=[]) {
  if(tree){
    nodeList.push(tree)
    for(let i of Object.keys(tree.children)){
      arguments.callee(tree.children[i],nodeList)
    }
  }
  return nodeList
}

/**
 * 深度优先遍历 + 分治
一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1
 * @param {*} pRoot 
 */
function TreeDepth(pRoot) {
  return !pRoot ? 0 : Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right)) + 1
}