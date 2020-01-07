let paths = []
function binaryTreePaths(root){
  getPaths(root)
  return paths
}

function getPaths(root,path=''){
  if(root!==null){
    path += root.val
    if(root.left===null && root.right === null) {
      paths.push(path)
    }
    else{
      path +='->'
      getPaths(root.left,path)
      getPaths(root.right,path)
    }
  }
}