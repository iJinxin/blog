/**
 * user controller
 */
const userModel = require('./../models/user');

const userController = {
  // 用户登录
  // 目前未开发注册功能，只支持 admin 和 stranger用户
  async login(ctx) {
    let status = 200;
    try {
      const account = ctx.request.body.account;
      const password = ctx.request.body.password;
      const userInfo = await userModel.getUserInfoByAccount(account);
      let message = "";
      if (userInfo === null) {
        status = 403;
        message = "账号不存在";
      } else if (userInfo.account === account && userInfo.password === password) {
        message = "请求成功";
      } else {
        status = 401;
        message = "账号或密码错误";
      }
      const body = {
        code: status,
        data: null,
        message: message
      }
      ctx.status = status;
      ctx.body = body;
    } catch (error) {
      ctx.throw(status);
    }
    
  }
}

module.exports = userController;