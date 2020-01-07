export default function Tree(){
  //根节点
  let root = null

  const Node = function(element) {
    this.element = element
    this.left = this.right = null
  }

  //插入节点
  this.insert = function(key) {
    var newNode = new Node(key)
    if (root === null) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  const insertNode = function(node, newNode) {
    if (newNode.key <= node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  // 前序遍历首先访问根节点，然后遍历左子树，最后遍历右子树
  this.preOrderTraverse = function() {
    preOrderTraverseNode(root)
  }
  //递归实现
  const preOrderTraverseNode = function(node) {
    if (node !== null) {
      console.log(node.key)
      arguments.callee(node.left)
      arguments.callee(node.right)
    }
  }
  /**
   * 非递归实现
   * 取跟节点为目标节点，开始遍历
    1.左孩子入栈 -> 直至左孩子为空的节点
    2.节点出栈 -> 访问该节点
    3.以右孩子为目标节点，再依次执行1、2、3
   * @param {*} root 
   */
  const _preOrderTraverseNode = function(root){
    const result = []
    const stack = []
    let current = root
    while(current || stack.length > 0){
      while(current){
        result.push(current.val)
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      current = current.right
    }
    return result
  }


  //中序遍历是先遍历左子树，然后访问根节点，然后遍历右子树
  this.inOrderTraverse = function() {
    inOrderTraverseNode(root)
  }
  //递归实现
  const inOrderTraverseNode = function(node) {
    if (node !== null) {
      arguments.callee(node.left)
      console.log(node.key)
      arguments.callee(node.right)
    }
  }
  /**
   * 非递归实现
   * 取跟节点为目标节点，开始遍历
    1.访问目标节点
    2.左孩子入栈 -> 直至左孩子为空的节点
    3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
   * @param {*} root 
   */
  const _inOrderTraverseNode = function(root){
    const result = []
    const stack = []
    let current = root
    while(current || stack.length > 0){
      while(current){
        stack.push(current)
        current = current.left
      }
      current = stack.pop()
      result.push(current.val)
      current = current.right
    }
    return result
  }

  // 后序遍历是先遍历左子树，然后遍历右子树，最后访问树的根节点
  this.postOrderTraverse = function() {
    postOrderTraverseNode(root)
  }
  //递归实现
  const postOrderTraverseNode = function(node) {
    if (node !== null) {
      arguments.callee(node.left)
      arguments.callee(node.right)
      console.log(node.key)
    }
  }
  /**
   * 非递归实现
   * 取跟节点为目标节点，开始遍历
    1.左孩子入栈 -> 直至左孩子为空的节点
    2.栈顶节点的右节点为空或右节点被访问过 -> 节点出栈并访问他，将节点标记为已访问
    3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再依次执行1、2、3
   * @param {*} root 
   */
  const _postOrderTraverseNode = function(root){
    const result = []
    const stack = []
    let last = null //标记上一个访问的节点
    let current = root
    while(current || stack.length > 0){
      while(current){
        stack.push(current)
        current = current.left
      }
      current = stack[stack.length -1]
      if(!current.right || current.right == last){
        current = stack.pop()
        result.push(current.val)
        last = current
        current = null //继续弹栈
      }else{
        current = current.right
      }
    }
    return result
  }
}
