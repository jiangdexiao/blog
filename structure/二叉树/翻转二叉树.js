// 翻转一棵二叉树。

// 示例：

// 输入：

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// 输出：

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

function invertTree(root){
  if(root === null) {
    return null
  }
  const temp = root.right
  root.right = root.left
  root.left = temp
  invertTree(root.right)
  invertTree(root.left)
  return root
}