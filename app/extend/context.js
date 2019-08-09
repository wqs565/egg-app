// app/extend/context.js 挂载到ctx上
module.exports = {
    foo(param) {
      // this 就是 ctx 对象，在其中可以调用 ctx 上的其他方法，或访问属性
      console.log(this.param, this.query)
      return this.query
    },
  };