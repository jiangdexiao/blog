let tilt = 0
function findTilt(root){
  
  traverse(root)
  return tilt

}

function traverse(root){
  if(root===null) {
    return 0
  }
  const left = arguments.callee(root.left)
  const right = arguments.callee(root.right)
  tilt += Math.abs(left.val-right.val)
  return left+right+root.val
}