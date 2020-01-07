/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 10:44:01
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 10:48:57
 * @Description: In User Settings Edit
 */
//篮球基类
const Basketball = function(){
  this.intro = '篮球'
}
Basketball.prototype = {
  getmember: function(){
    console.log('每个队伍5个球员')
  },
  getballSize: function(){
    console.log('7号篮球')
  }
}
//足球基类
const Football = function(){
  this.intro = '足球'
}
Basketball.prototype = {
  getmember: function(){
    console.log('每个队伍11个球员')
  },
  getballSize: function(){
    console.log('1号足球')
  }
}
//运动工厂
const SportFactory = function(name){
  switch(name){
    case 'NBA':return new Basketball();
    case 'worldCup':return new Football();
  }
}