/**
 * 时间复杂度：O(n^2)
 * 空间复杂度：O(1)
 * 暴力解法 取左边最高和右边最高的最小值-当前高度
 * Math.min(max_left,max_right)-current[i]
 */
const trap = function(height){
  let sum = 0;
    //最两端的列不用考虑，因为一定不会有水。所以下标从 1 到 length - 2
    for (let i = 1; i < height.length - 1; i++) {
        let max_left = 0;
        //找出左边最高
        for (let j = i - 1; j >= 0; j--) {
            if (height[j] > max_left) {
                max_left = height[j];
            }
        }
        let max_right = 0;
        //找出右边最高
        for (let j = i + 1; j < height.length; j++) {
            if (height[j] > max_right) {
                max_right = height[j];
            }
        }
        //找出两端较小的
        let min = Math.min(max_left, max_right);
        //只有较小的一段大于当前列的高度才会有水，其他情况不会有水
        if (min > height[i]) {
            sum = sum + (min - height[i]);
        }
    }
    return sum;
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 * 动态规划 
 * 左边最大值 max_left [i] = Max(max_left [i-1],height[i-1])
 * 右边最大值 max_right[i] = Max(max_right[i+1],height[i+1])
 */
const trap1 = function(height){
  let sum = 0
  let max_left,
      max_right = [height.length];
  for (let i = 1; i < height.length - 1; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
      max_right[i] = Math.max(max_right[i + 1], height[i + 1]);
  }
  for (let i = 1; i < height.length - 1; i++) {
    let min = Math.min(max_left[i], max_right[i]);
    if (min > height[i]) {
        sum = sum + (min - height[i]);
    }
  }
  return sum;
}

/**
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)
 * 双指针
 * max_left < max_right 则必须: height [ left - 1 ] < height [ right + 1 ]
 */
const trap2 = function(height){
  let sum = 0
  let max_left,
      max_right = 0;
  let left = 1,
      right = height.length-2;

  for(let i = 1; i < height.length - 1; i++){
    //从左到右
    if(height[left-1] < height[right+1]){
      max_left = Math.max(max_left,height[left-1])
      if( max_left > height[left] ){
        sum = sum + ( max_left - height[left] )
      }
      left++
    }else{
      //从右到左
      max_right = Math.max(max_right,height[right+1])
      if(max_right > height[right]){
        sum = sum + (max_right - height[right])
      }
      right--
    }
  }
  return sum
}

/**
 * 栈
 * 1.当前高度小于等于栈顶高度(表示有积水)，入栈，指针后移。
 * 2.当前高度大于栈顶高度(表示没有积水)，出栈，计算出当前墙和栈顶的墙之间水的多少，然后计算当前的高度和新栈的高度的关系，
 * 重复第 2 步。直到当前墙的高度不大于栈顶高度或者栈空，然后把当前墙入栈，指针后移。
 */
const trap3 = function(height){
  let sum = 0
  const stack = []
  let current = 0
  while(current<height.length){
    //如果栈不为空并且当前指向的高度大于栈顶高度就一直循环
    while(stack.length>0 && height[current] > height[stack[0]]){
      const h = height[stack[0]] //取出要出栈的元素
      const top = stack.pop()//取出
      if(stack.length===0) break; //栈空停止
      const distance = current - top - 1 //两个墙之间的距离
      let min = Math.min(height[stack[0]],height[current])
      sum = sum + distance*(min-h)
    }
    stack.push(current) //当前指针入栈
    current++
  }
  return sum
}