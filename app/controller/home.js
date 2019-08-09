'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    this.app.foo('wqs')
    this.ctx.foo()
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}

module.exports = HomeController;
