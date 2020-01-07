//中介者对象
const Mediator = function(){
  //消息对象
  let _msg = {}
  return {
    /**
     * 订阅消息方法
     * @param {*} type 消息名称
     * @param {*} action 消息回调函数
     */
    register: function(type,action){
      //如果该消息存在
      if(_msg[type]){
        //存入回调函数
        _msg[type].push(action)
      }else{
        //不存在，则建立该消息容器
        _msg[type] = []
        //存入新消息回调函数
        _msg[type].push(action)
      }
    },
    /**
     * 发布消息方法
     * @param {*} type 
     */
    send: function(type){
      //如果该消息已经被订阅
      if(_msg[type]){
        //遍历已存储的消息回调函数
        for(let i =0,len = _msg[type].length; i<len;i++){
          //执行该回调函数
          _msg[type][i] && _msg[type][i]()
        }
      }
    }
  }
}()

//订阅消息
Mediator.register('demo',function(){
  console.log('first')
})
//发布消息
Mediator.send('demo')

