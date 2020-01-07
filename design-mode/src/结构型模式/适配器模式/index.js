/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-17 16:03:14
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-17 16:11:51
 * @Description: In User Settings Edit
 */
//参数适配
function todo(obj){
  const _adapter = {
    name:'Jom',
    title:'设计模式',
    age:23,
    color:'pink',
    size:100,
    price:200
  }
  for(const i in _adapter){
    _adapter[i] = obj[i]||_adapter[i]
  }
  //.....
}