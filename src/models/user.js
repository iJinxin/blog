/**
 * user model
 */
const Operations = require('./../../db/operations');
const userModel = {
  // 根据账号查询用户信息-登录
  async getUserInfoByAccount(account) {
    const result = await Operations.findOne('user', {'account': account});
    return result;
  }
};

module.exports = userModel;