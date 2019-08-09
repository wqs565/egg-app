'use strict';

const Controller = require('egg').Controller;

class NewsController extends Controller {
  async index() {
    this.ctx.body = '新闻页面'
  }
  async list() {
    let { ctx } = this  
    ctx.body = `列表页面 ${ctx.params.id}`
  }
}

module.exports = NewsController;
