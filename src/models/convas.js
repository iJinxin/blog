/**
 * convas models
 */
const Operations = require('./../../db/operations');

const canvasModel = {
  // 向 barrage 集合获取全部数据
  async queryBarrages() {
    const barrages = await Operations.find('barrage');
    return barrages;
  },
  // 向 barrage 集合添加新弹幕
  async addBarrage(barrage) {
    const res = await Operations.insertOne('barrage', barrage);
    return res;
  }
}

module.exports = canvasModel;