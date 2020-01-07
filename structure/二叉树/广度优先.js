/**
 * 广度优先搜索(BFS) 非递归
 * @param {*} tree 
 */
function breadthTravel(tree){
  let queue = []
  let nodeList = []
  tree && queue.push(tree)

  while(queue.length){
    let node = queue.shift() //出队 
    nodeList.push(node)
    let children = node&&node.children?node.children:[]
    for(let i=0;i<children.length;i++){
      nodeList.push(children[i])  
    }
  }
  return nodeList
}

