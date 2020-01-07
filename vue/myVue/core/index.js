/**
 * 创建自定义Vue类 模拟实现双向绑定的myVue
 * @param {*} options 
 */
function myVue(options) {
  this._init(options);
}

//观察者
function Watcher(name,el,vm,exp,attr){
  this.name = name //指令名称 例如文本 则值为‘text’
  this.el = el //dom元素
  this.vm = vm //myVue 实例
  this.exp = exp //指令对应的值 
  this.attr = attr //绑定的属性值

  this.update()
}

Watcher.prototype.update = function(){
  //更新dom元素对应属性的值
  this.el[this.attr] = this.vm.$data[this.exp]
}

//初始化
myVue.prototype._init=function(options){
  this.$options = options;
  this.$el = document.querySelector(options.el);
  this.$data = options.data;
  this.$methods = options.methods;
  this._binding = {};
  this._obverse(this.$data);
  this._complie(this.$el);
}

/**
 * 订阅-发布模式
 * 订阅器
 */
myVue.prototype._obverse = function(obj){
  var value;
  for(key in obj){
    if(obj.hasOwnProperty(key)){
      //缓存当前key的指令列表
      this._binding[key] = {
        _directives: []
      }
    }
    value = obj[key]
    //如果当前值也是object类型则递归
    if(typeof value === 'object'){
      this._obverse(value)
    }
    
    var binding = this._binding[key]
    Object.defineProperty(this.$data, key, {
      enumerable: true, 
      configurable: true, //属性是否配置，以及是否可删除
      get: function(){
        return value
      },
      set: function(newVal){
        if(value !== newVal){
          value = newVal //更新值
          binding._directives.forEach(function(item){
            item.update()
          })
        }
      }
    })
  }
}

/**
 * 解释器
 */
myVue.prototype._complie = function(root){
  var _this = this
  var nodes = root.children
  for(var i = 0; i< nodes.length;i++){
    var node = nodes[i]
    if(node.children.length){
      this._complie(node)
    }

    if(node.hasAttribute('v-click')){
      node.onclick = (function(){
        var attrVal = nodes[i].getAttribute('v-click')
        return _this.$methods[attrVal].bind(_this.$data)
      })()
    }

    if(node.hasAttribute('v-model') && (
      node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'
    )){
      //监听输入事件
      node.addEventListner('input',(function(key){
        var attrVal = node.getAttribute('v-model')
        _this._binding[attrVal]._directives.push(new Watcher(
          'input',
          node,
          _this,
          attrVal,
          'value'
        ))

        return function(){
          _this.$data[attrVal] = nodes[key].value
        }
      })(i))
    }

    if(node.hasAttribute('v-bind')){
      var attrVal = node.getAttribute('v-bind')
      _this._binding[attrVal]._directives.push(new Watcher(
        'text',
        node,
        _this,
        attrVal,
        'innerHTML'
      ))
    }
  }
}