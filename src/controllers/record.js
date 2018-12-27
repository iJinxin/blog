/**
 * record controller
 */
const recordModel = require('./../models/record');

const recordController = {
  // 用户添加note
  async addNote(ctx) {
    try {
      const requestBody = Object.assign({}, ctx.request.body);
      requestBody.timestamp = new Date();
      const result = await recordModel.addNote(requestBody);
      const body = {
        code: 200,
        data: null,
        message: '请求成功'
      };
      ctx.body = body;
    } catch(error) {
      ctx.throw(500);
    }
  }
}

module.exports = recordController;