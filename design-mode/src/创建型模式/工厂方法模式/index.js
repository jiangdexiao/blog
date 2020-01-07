/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 10:52:25
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 10:59:18
 * @Description: In User Settings Edit
 */
//安全工厂方法
const Factory = function(type,content){
  if(this instanceof Factory){
    const s = new this[type](content)
    return s
  }else{
    return new Factory(type,content)
  }
}
//工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
  Basketball: function(content){
    console.log('this is basketball')
  },
  Football: function(content){
    console.log('this is football')
  }
}