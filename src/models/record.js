/**
 * record model
 */
const Operations = require('./../../db/operations');
const mongoServer = require('./../../db/server');
const ObjectID = require('mongodb').ObjectID;

const recordController = {
  // 插入新note到note document中
  async addNote(note) {
    const result = await Operations.insertOne('note', note);
    return result;
  },

  // 根据用户id获取noteList
  async queryNoteListByUserId(userId) {
    const DBserver = await mongoServer.getMongoServer();
    // const notes = Operations.find('note', {userId: userId}).sort([['timestamp', 1]]);
    const notes = await DBserver.collection('note').find({userId: userId}).sort([['timestamp', -1]]).toArray();
    return notes;
  },

  // 根据note _id 删除note
  async deleteNoteById(noteId) {
    const result = await Operations.deleteOne('note', {_id: ObjectID(noteId)});
    return result;
  }
}

module.exports = recordController;