//装饰者
const decorator = function(input,fn){
  //获取事件源
  const input = document.getElementById(input)
  //若事件源已经绑定事件
  if(typeof input.onclick === 'function'){
    //缓存事件源原有回调函数
    const oldClickFn = input.onclick
    input.onclick = function(){
      oldClickFn()
      //执行新增函数
      fn()
    }
  }else{
    input.onclick = fn
  }
}