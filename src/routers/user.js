/**
 * user router
 */
const router = require('koa-router')();
const userController = require('./../controllers/user');

const routers = router
  .post('/login', userController.login)

module.exports = routers;