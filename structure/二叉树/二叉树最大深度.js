
function maxDepth(root){
  if(root===null) return 0
  const left = arguments.callee(root.left)
  const right = arguments.callee(root.right)
  return Math.max(left,right)+1
}