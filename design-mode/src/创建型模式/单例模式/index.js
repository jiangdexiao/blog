/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 15:37:27
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 15:40:02
 * @Description: In User Settings Edit
 */
const getInstance = (function(){
  let _instance = null
  function Single(){
    /**私有属性和方法 */
    return {
      publicMethod:function(){},
      publicProperty: '1.0'
    }
  }
  return function(){
    if(!_instance){
      _instance = Single()
    }
    return _instance
  }
})()

console.log(getInstance().publicProperty)