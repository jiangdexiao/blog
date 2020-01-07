/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 18:03:03
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 18:18:22
 * @Description: In User Settings Edit
 */
/**
 * 
 */
const MarryState = function(){
  const _currentState = {}
  const states = {
    jump:function(){
      console.log('jump')
    },
    move:function(){
      console.log('move')
    },
    shoot:function(){
      console.log('shoot')
    },
    squat:function(){
      console.log('squat')
    }
  }
  const Action = {
    changeState: function(){
      const arg = arguments
      //重置内部状态
      _currentState = {}
      if(arg.length){
        for(let i=0,len = arg.length;i<len;i++){
          //向内部状态中添加动作
          _currentState[arg[i]] = true
        }
      }
      return this
    },
    //执行动作
    goes: function(){
      console.log('执行动作')
      for(let i in _currentState){
        states[i] && states[i]()
      }
      return this
    }
  }
  return {
    change: Action.changeState,
    goes: Action.goes
  }
}

const marry = new MarryState()
marry.change('jump','shoot')
.goes()
.goes()
.change('shoot')
.goes()