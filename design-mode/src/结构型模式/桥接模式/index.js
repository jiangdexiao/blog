//抽取公共部分 使用匿名函数进行桥接
//多维变量类
function Speed(x,y){
  this.x = x
  this.y = y
}
Speed.prototype.run = function(){
  console.log('runing star')
}
//上色
function Color(color){
  this.color = color
}
Color.prototype.draw = function(){
  console.log('draw color')
}
//变形
function Shape(shape){
  this.shape = shape
}
Shape.prototype.change = function(){
  console.log('change shape')
}
//说话
function Speek(word){
  this.word = word
}
Speek.prototype.say = function(){
  console.log('speeking')
}

//create Ball
function Ball(x,y,color){
  //create speed
  this.speed = new Speed(x,y)
  //create color
  this.color = new Color(color)
}

Ball.prototype.init = function(){
  // running 
  this.speed.run()
  // draw
  this.color.draw()
}