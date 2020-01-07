/*
 * @Author: 289608944@qq.com
 * @Date: 2019-12-19 18:15:46
 * @LastEditors: 289608944@qq.com
 * @LastEditTime: 2019-12-19 18:17:16
 * @Description: In User Settings Edit
 */
const DB = require('./helper').DB
const user = DB('user')

user.insert({name:'jom'})