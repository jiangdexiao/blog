/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-19 18:07:53
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-19 18:22:58
 * @Description: In User Settings Edit
 */
const mongodb = require('mongodb')
const config = require('./config').DB
const d = new mongodb.Db(
  config.db,
  new mongodb.Server(
    config.host,
    config.port,
    {auto_reconnect: true}
  ),
  {safe:true}
)
//连接数据库
function connect(col,fn){
  d.open(function(err,db){
    if(err)
      throw err
    else
      db.collection(col,function(err,col){
        if(err)
          throw err
        else
          fn && fn(col,db)
      })
  })
}
exports.DB = function(col){
  return {
    insert: function(data,success,fail){
      connect(col,function(col,db){
        col.insert(data,function(err,docs){
          if(err)
            fail && fail(err)
          else
            success && success(docs)
          //关闭数据库
          db.close()
        })
      })
    },
    remove: function(){
      
    },
    update: function(){},
    find: function(){}
  }
}

