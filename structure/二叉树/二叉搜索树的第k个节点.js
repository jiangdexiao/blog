//递归实现
function KthNode(pRoot, k) {
  const arr = [];
  loopThrough(pRoot, arr);
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}

function loopThrough(node, arr) {
  if (node) {
    loopThrough(node.left, arr);
    arr.push(node);
    loopThrough(node.right, arr);
  }
}


//非递归实现
function KthNode(pRoot, k) {
  const arr = [];
  const stack = [];
  let current = pRoot;
  while (stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    arr.push(current);
    current = current.right;
  }
  if (k > 0 && k <= arr.length) {
    return arr[k - 1];
  }
  return null;
}