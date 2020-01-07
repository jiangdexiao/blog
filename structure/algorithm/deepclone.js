/*
 * @Author: 289608944@qq.com
 * @Date: 2019-10-19 17:19:55
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-10-19 17:32:49
 * @Description: In User Settings Edit
 */

/**
 * 深拷贝
 * @param {*} source 
 */
function deepClone(source){
  if( !source ) return source
  let target = (source.constructor === Array) ? []:{}
  for(let key in source){
    if(source.hasOwnProperty(key)){
      let value = source[key]
      if(value === source) continue
      if(typeof value === 'object'){
        arguments.callee(value)
      }else{
        target[key] = value
      }
    }
  }
  return result
}