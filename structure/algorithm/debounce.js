/*
 * @Author: 289608944@qq.com
 * @Date: 2019-10-19 16:37:19
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-10-19 17:17:50
 * @Description: In User Settings Edit
 */

 /**
  * 防抖实现
  * 指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
  * @param {*} func 函数
  * @param {*} wait 延迟执行时间（毫秒）
  * @param {*} immediate  true 前沿触发 false 后沿触发
  */
function debounce(func,wait,immediate){
  let timeoutID
  
  return function(){
    let context = this
    let args = arguments

    if(timeoutID){
      clearTimeout(timeoutID)
    }

    if(immediate){
      const callNow = !timeoutID
      timeoutID = setTimeout(()=> {
        timeoutID = null // 如果周期内函数未触发，则重新初始化timeoutID
      },wait)

      if(callNow){
        // 初始化状态下，立即执行事件函数
        func.apply(context,args)
      }
    }else{
      timeoutID = setTimeout(function(){
        // 在周期内函数被触发会更新定时器，延迟事件函数的执行
        func.apply(context,args)
      },wait)
    }
  }
}

/**
 * 节流实现
 * 指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */
function throttle(func,wait,immediate){

  let timer = null
  let previous = Date.now()
  return function(){
    let context = this
    let args = arguments
    if(immediate){

      let now = Date.now()
      if( now - previous >= wait ){
        // 初始状态下先执行一次事件函数，并且以当前时间戳为时间起点，往后只有经过的时间大于一个周期后触发th函数才会更新时间的起点并且执行事件函数
        func.apply(context,args)
        previous = now
      }
    }else{
      if(!timer){
        timer = setTimeout(()=> {
          timer = null
          func.apply(context,args)
        })
      }
    }
  }
}