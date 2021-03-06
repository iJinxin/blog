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
  },

  // 用户获取note list
  async queryNotes(ctx) {
    try {
      const notes = await recordModel.queryNoteListByUserId(ctx.query.userId);
      const body = {
        code: 200,
        data: notes,
        message: '请求成功'
      };
      ctx.body = body;
    } catch (error) {
      ctx.throw(500);
    }
  },
  
  // 删除note
  async deleteNote(ctx) {
    try {
      const res =  await recordModel.deleteNoteById(ctx.query.noteId);
      const body = {
        code: 200,
        data: null,
        message: '操作成功'
      }
      ctx.body = body;
    } catch (error) {
      ctx.throw(500);
    }
  }
}

module.exports = recordController;