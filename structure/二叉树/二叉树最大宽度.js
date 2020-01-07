
function widthOfBinaryTree(root){

  let maxWidth = 0
  let res = []
  maxBreadth(root,0,0)
  return maxWidth
  /**
   * 
   * @param {*} root 
   * @param {*} level 层级
   * @param {*} num 编号
   */
  function maxBreadth(root,level,num){
    if(root===null) return 0
  
    if(res[level]){
      res[level].push(num)
    }else{
      res[level] = [num]
    }
    //计算最大宽度 R-L+1
    const nodes = res[level]
    const width = nodes[nodes.length-1] - nodes[0] +1
    if(width>maxWidth){
      maxWidth = width
    }
    if(root.left!==null){
      arguments.callee(root.left,level+1,num*2+1)
    }
    if(root.right!=null){
      arguments.callee(root.right,level+1,num*2+2)
    }
  }
}

