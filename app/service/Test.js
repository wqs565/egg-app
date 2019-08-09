'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async sayHi(msg) {
    return `hi ${msg} wqs`
  }
}

module.exports = TestService;
