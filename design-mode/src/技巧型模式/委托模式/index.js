/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-19 17:34:05
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-19 17:36:48
 * @Description: In User Settings Edit
 */
//列表点击 可委托父元素
const onclick = function(e){
  let e = e || window.event
  const target = e.target || e.srcElement
  if(target.nodeName.toLowerCase()==='li'){
    //...do something
  }
}