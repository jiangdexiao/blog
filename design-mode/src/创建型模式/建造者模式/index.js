
const Human = function(param){
  //技能
  this.skill = param && param.skill || '保密'
  //兴趣爱好
  this.hobby = param && param.hobby || '保密'
}

Human.prototype = {
  getSkill: function(){
    return this.skill
  },
  getHobby: function(){
    return this.hobby
  }
}
//实例化姓名
const Named = function(name){
  this.name = name
}
//实例化职位
const Job = function(job){
  const that = this
  (function(job,that){
    switch(job){
      case 'code':that.job = '工程师';that.jobDescrition = '程序猿';break;
      case 'UI':that.job = '设计师';that.jobDescrition = '设计师';break;
    }
  })(job,that)
}
//更改职位
Job.prototype.changeJob = function(job){
  this.job = job
}
//更改职位描述
Job.prototype.changeDescription = function(jobDescrition){
  this.jobDescrition = jobDescrition
}
//创建
const Person = function(name,job){
  //创建对象
  const _person = new Human()
  //创建对象姓名
  _person.name = new Named(name)
  //创建对象职位
  _person.job = new Job(job)
  return _person
}

const person = new Person('Allys','code')