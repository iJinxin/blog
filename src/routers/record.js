/**
 * record router
 */
const router = require('koa-router')();
const recordController = require('./../controllers/record');

const routers = router
  .post('/addNote', recordController.addNote)
  .get('/queryNotesByUserId', recordController.queryNotes)
  .get('/deleteNote', recordController.deleteNote)

module.exports = routers;