/**
 * user controller
 */
const userModel = require('./../models/user');

const userController = {
  // 用户登录
  // 目前未开发注册功能，只支持 admin 和 stranger用户
  async login(ctx) {
    const account = ctx.request.body.account;
    const userInfo = await userModel.getUserInfoByAccount(account);
    console.log(userInfo);
    ctx.body = userInfo;
  }
}

module.exports = userController;