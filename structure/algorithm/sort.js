/**
 * 排序算法
 */
/**
 * 冒泡排序 
 * 时间复杂度：O(n^2)
 * 思路：前后两两比较，大的往后冒泡
 */
const bubbleSort = function(array){
  let i, j;
  for(i=1;i<array.length;i++){//需要n-1次遍历
    let changed = false
    for(j=0;i<array.length-i;j++){//减i是减去已经排序过的个数
      if(array[j] > array[j+1]){
        [array[j],array[j+1]] = [array[j+1],array[j]]
        changed = true
      }
    }
    //本轮没有发现位置调换即是排序完成
    if(!changed){
      break;
    }
  }
}
/**
 * 选择排序 
 * 时间复杂度：O(n^2)  
 * 空间复杂度：O(1)
 * 思路：
 * 从头遍历到尾部，找出所有项中最大的一个元素
 * 将这个元素和最后一个元素交换
 * 对剩下的元素重复进行上面的操作，每次找出剩余中最大的
 * 最后的数组是升序排列的
 */
const selectSort = function(array){
  let i, j;
  for(i=1;i<array.length;i++){//需要n-1次遍历
    let maxIndex = 0
    for(j=0;j<=array.length-i;j++){
      if(array[j]>array[maxIndex]){
        maxIndex = j
      }
    }

    //将子数组最大值所以的值与子数组末尾的值互换
    [array[array.length-i],array[maxIndex]] = [array[maxIndex],array[array.length-i]]
  }
}
/**
 * 快速排序
 * 时间复杂度：最坏情况下的时间复杂度和冒泡一样
 * 思路：将数组的第一个数字作为基准，最后使得基准数字位于数组中间某个位置，它的左边的数字都比它小，它的右边的数字都比它大
 * 设置两个分享指向数组头部和尾部的指针i和j，首先移动向左j，使得array[j] 小于基准。然后向右移动i，
 * 使得array[i] 大于基准，交换这两个元素。当i 和j 的值相等时，交换基准与位置i上的元素，然后对i左边以及右边的元素分别进行快速排序。
 */
const quickSort = function(left,right,array){
  if(left<right)return
  let temp = array[left]
  let i = left;
  let j = right;
  while(i < j){
    if(array[j] > temp && i < j){
      j--
    }

    if(array[i] < temp && i < j){
      i++
    }

    if(i!==j){
      let current = array[i]
      array[i] = array[j]
      array[j] = current
    }
  }
  //交换基准与当前位置i的元素
  array[left] = array[i];
  array[i] = temp;
  quickSort(left,i-1,array)
  quickSort(i+1,right,array)
}

/**
 * 插入排序
 * 思路：
 * 将数组前面部分看做有序数组
 * 每次将后面部分的第一个与已排序数组作比较，插入到合适的位置
 * 有序数组初始状态有1个数字
 * 时间复杂度为：O(n^2)
 * @param {} array 
 */
const InsertSort = function(array){
  let i,j;
  for(i=1;i<array.length;i++){//表示当前要向前插入的数字的索引，从1（即第二个数）开始前插
    let val = array[i] //记录当前要前插的数的大小
    /**
     * 用指针j来遍历第i个数字前面的，已经排序好的子数组，当j没有指到头，并且j的数字大于要插入的数字时说明j还要向前遍历，直到发现一个比要插入数字小的位置pos
     * 然后将这个数字插入到pos+1处，如果j已经指到头了，到了-1还没有找到比当前数字小的位置，就把当前数字放在索引0处
     */
    for(j=i-1; j>=0 && array[j] > val; j--){
      array[j+1] = array[j]
    }
    array[j+1] = val
  }
}

/**
 * 桶排序、
 * 思路：
 * 大致思路是将数组分到有限个桶中
    每个桶中存储一定范围之内的数
    通过映射函数，将待排序数组中的元素映射到各个对应的桶中
    最后将所有桶中的数据按顺序连接起来
    本质上是一种已空间换时间的方式
 * 时间复杂度为：O(N)
 * @param {*} array 
 */
const BucketSort = function(array) {
  var min = Number.MAX_VALUE;
  var max = Number.MIN_VALUE;
  var length = array.length;
  var bucketNum;

  // 获取数组最大值和最小值
  for (var i = 0; i < length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }

  // 计算桶的数量
  bucketNum = Math.ceil((max - min) / length) + 1;

  //初始化桶
  var bucketArray = [];
  for (var i = 0; i < bucketNum; i++) {
    bucketArray[i] = [];
  }

  for (var j = 0; j < length; j++) {
    //计算桶序列号
    var cursor = Math.floor((array[j] - min) / length);
    innerSort(bucketArray[cursor], array[j]);
  }

  var newArray = [];
  for (var i = 0; i < bucketNum; i++) {
    for (var j = 0; j < bucketArray[i].length; j++) {
      newArray.push(bucketArray[i][j]);
    }
  }

  return newArray;

}


// 内部排序
function innerSort(array, current) {
  var length = array.length;
  if (length === 0) {
    array[0] = current;
    return;
  }
  for (var i = length - 1; i >= 0; i--) {
    if (array[i] > current) {
      array[i + 1] = array[i];
    } else {
      array[i + 1] = current;
      break;
    }
  }
}