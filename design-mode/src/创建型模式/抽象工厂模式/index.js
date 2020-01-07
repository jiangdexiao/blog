
/**
 * 实际是一个子类实现父类的方法
 * @param {*} subType 
 * @param {*} superType 
 */
const VehicleFactory = function(subType,superType){
  //判断抽象工厂中是否有该抽象类
  if(typeof VehicleFactory(superType) === 'function'){
    //缓存类
    function F(){}
    //继承父类属性和方法
    F.prototype = new VehicleFactory[superType]()
    //将子类constructor指向子类
    subType.constructor = subType
    //将子类原型继承父类 通过new复制父类的实例 此处不仅继承父类的原型方法 还继承了父类的对象属性
    subType.prototype = new F()
  }else{
    throw new Error('未创建该抽象类')
  }
}

VehicleFactory.Car = function(){
  this.type = 'car'
}
VehicleFactory.Car.prototype = {
  getPrice: function(){
    return new Error('抽象方法不能调用')
  },
  getSpeed: function(){
    return new Error('抽象方法不能调用')
  }
}

VehicleFactory.Bus = function(){
  this.type = 'bus'
}
VehicleFactory.Bus.prototype = {
  getPrice: function(){
    return new Error('抽象方法不能调用')
  },
  getSpeed: function(){
    return new Error('抽象方法不能调用')
  }
}

/****抽象实现 */
const BMW = function(price,speed){
  this.price = price
  this.speed = speed
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory[BMW,'Car']
BMW.prototype.getPrice = function(){
  return this.price
}

const Benz = function(price,speed){
  this.price = price
  this.speed = speed
}
//抽象工厂实现对Car抽象类的继承
VehicleFactory[Benz,'Car']
Benz.prototype.getPrice = function(){
  return this.price
}