/**
 * canvas controller
 */
const canvasModel = require('./../models/convas');

const canvasController = {
  // 获取全部弹幕
  async queryBarrages(ctx) {
    try {
      const barrages = await canvasModel.queryBarrages();
      const body = {
        code: 200,
        data: barrages,
        message: '操作成功'
      };
      ctx.body = body;
    } catch (error) {
      ctx.throw(500);
    }
  },

  // 添加弹幕
  async addBarrage(ctx) {
    try {
      const barrage = Object.assign({}, ctx.request.body);
      const res = await canvasModel.addBarrage(barrage);
      const body = {
        code: 200,
        data: null,
        message: '操作成功'
      };
      ctx.body = body;
    } catch(error) {
      ctx.throw(500);
    }
  }
}

module.exports = canvasController;