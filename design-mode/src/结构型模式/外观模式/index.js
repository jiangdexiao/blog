/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 15:42:53
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 15:58:42
 * @Description: In User Settings Edit
 */
function addEvent(dom,type,fn){
  //对于支持DOM2级时间处理程序
  if(dom.addEventListener){
    dom.addEventListener(type,fn,false)
  //<ie9
  }else if(dom.attachEvent){
    dom.attachEvent(`on${type}`,fn)
  }else {
    dom[`on${type}`] = fn
  }
}

//获取事件对象
const getEvent = function(event){
  //标准浏览器返回event，ie下window.event
  return event || window.event
}
//获取元素
const getTarget = function(event){
  const _event = getEvent(event)
  //标准浏览器下event.target，ie下event.srcElement
  return event.target || event.srcElement
}
//阻止默认行为
const preventDefault = function(event){
  const _event = getEvent(event)
  if(event.preventDefault){
    event.preventDefault()
  //ie
  }else{
    event.returnValue = false
  }
}


/**map */
const map = new Map([
  [1, () => '审核中'],
  [2, () => '审核通过'],
  [3, () => '审核拒绝'],
]) 

const action = map.get(1);
action && action()