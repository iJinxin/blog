/**
 * record router
 */
const router = require('koa-router')();
const recordController = require('./../controllers/record');

const routers = router
  .post('/addNote', recordController.addNote)

module.exports = routers;