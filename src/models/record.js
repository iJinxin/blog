/**
 * record model
 */
const Operations = require('./../../db/operations');

const recordController = {
  // 插入新note到note document中
  async addNote(note) {
    const result = Operations.insertOne('note', note);
    return result;
  },

  // 根据用户id获取noteList
  async queryNoteListByUserId(userId) {
    const notes = Operations.find('note', {userId: userId});
    return notes;
  }
}

module.exports = recordController;