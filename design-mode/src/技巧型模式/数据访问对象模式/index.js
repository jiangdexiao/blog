/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-19 17:41:45
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-19 18:03:30
 * @Description: In User Settings Edit
 */
/**
 * 本地存储库
 * @param {*} preId 本地存储数据库前缀
 * @param {*} timeSign 时间戳与存储数据之间的拼接符
 */
const BaseLocalStorage = function(preId,timeSign){
  this.preId = preId
  this.timeSign = timeSign||'|-|'
}

BaseLocalStorage.prototype = {
  status:{
    SUCCESS:0,
    FAILURE:1,
    OVERFLOW:2,//溢出
    TIMEOUT:3 //过期
  },
  storage: localStorage||window.localStorage,
  getKey: function(key){
    return this.preId + key
  },
  add: function(key,value,callback,time){
    const status = this.status.SUCCESS
    key = this.getKey(key)
    try {
      time = new Date(time).getTime()||time.getTime()
    } catch (error) {
      time = new Date().getTime()+100*60*60*24*31
    }
    try {
      this.storage.setItem(key,time+this.timeSign+value)
    } catch (error) {
      status = this.status.OVERFLOW
    }
  },
  get: function(key,callback){
    let status = this.status.SUCCESS,
    key = this.getKey(key),
    value=null,
    timeSignLen = this.timeSign.length,
    that = this,
    index,
    time,
    result;
    try {
      value = that.storage.getItem(key)
    } catch (error) {
      result = {
        status:that.status.FAILURE,
        value:null
      }
      callback && callback.call(this,result.status,result.value)
      return result
    }
    if(value){
      index = value.indexOf(that.timeSign)
      time = +value.slice(0,index)
      if(new Date(time).getTime()>new Date().getTime() || time === 0){
        value = value.slice(index+timeSignLen)
      }else{
        value = null
        status = that.status.TIMEOUT
        that.remove(key)
      }
    }else{
      status = that.status.FAILURE
    }
    result = {
      status,
      value
    }
    callback && callback.call(this,result.status,result.value)
    return result
  },
  remove: function(key,callback){
    let status = this.status.FAILURE,
    key = this.getKey(key)
    value = null;
    try {
      value = this.storage.getItem(key)
    } catch (error) {
      if(value){
        try {
          this.storage.removeItem(key)
          status = this.status.SUCCESS
        } catch (error) {
          
        }
      }
    }
    callback && callback.call(this,status,status>0?null:value.slice(value.indexOf(this.timeSign) + this.timeSign.length))
  }
}

