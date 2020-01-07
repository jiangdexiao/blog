/*
 * @Author: 289608944@qq.com
 * @Date: 2019-10-19 16:17:20
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-10-21 09:35:26
 * @Description: bind call  apply 函数实现
 */
Function.prototype.bind2 = function(that){
  var _this = this,
    args = Array.prototype.slice.call(arguments,1),
    fNOP = function () {},
    bound = function(){
      //这里的this指的是调用时候的环境
      return _this.apply(this instanceof  fNOP ?　this : that||window,
          args.concat(Array.prototype.slice.call(arguments,0))
      )
    }    
  fNOP.prototype = _this.prototype;

  bound.prototype = new fNOP();  //继承原函数的原型链

  return bound;
}

Function.protorype.call2 = function(context){
  var context = context || window
  context.fn = this
  var args = [...arguments].slice(1)
  var result = eval('context.fn('+arg+')')
  delete context.fn
  return result
}

Function.protorype.apply2 = function(context,args){
  var context = context || window
  context.fn = this
  var result 
  if(!args){
    result = context.fn()
  }
  else{

    var args = [...arguments].slice(1)
    result = eval('context.fn('+arg+')')
  }
  delete context.fn
  return result
}