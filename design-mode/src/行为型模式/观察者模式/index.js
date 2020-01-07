/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 17:38:25
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 17:54:45
 * @Description: In User Settings Edit
 */
/**
 * 观察者 可解决模块间通信
 * 1.订阅消息
 * 2.取消订阅
 * 3.发送订阅
 */
const Observer = (function(){
  //防止消息队列暴露而被篡改故将消息容器作为静态私有变量保存
  const __messages = {}
  return {
    //注册
    regist: function(type,fn){
      //如果消息不存在则应该创建一个消息类型
      if(typeof __messages[type] === 'undefined'){
        __messages[type] = fn
      }else{
        //消息存在 将动作方法推入该消息队列的动作执行栈中
        __messages[type].push(fn)
      }
    },
    //发布
    fire: function(type,args={}){
      //如果消息没有被注册，则返回
      if(!__messages[type])return
      //定义消息信息
      const events = {
        type,
        args
      }
      let i = 0
      const len = __messages[type].length
      for(;i<len;i++){
        //依次执行注册的消息对应的事件
        __messages[type][i].call(this,events)
      }
    },
    //取消
    remove: function(type,fn){
      if(__messages[type] instanceof Array){
        //从最后一个消息动作遍历
        let i = __messages[type].length-1
        for(;i>=0;i--){
          //如果存在该动作则在消息动作序列中移除相应的动作
          __messages[type][i] === fn && __messages[type].splice(i,1)
        }
      }
    }
  }
})()

Observer.regist('text',function(e){
  console.log(e.type,e.args.msg)
})

Observer.fire('test',{msg:'传递参数'})