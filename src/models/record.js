/**
 * record model
 */
const Operations = require('./../../db/operations');

const recordController = {
  // 插入新note到note document中
  async addNote(note) {
    const result = Operations.insertOne('note', note);
    return result;
  }
}

module.exports = recordController;