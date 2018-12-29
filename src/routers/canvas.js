/**
 * canvas router
 */
const router = require('koa-router')();
const routerController = require('./../controllers/convas');

const routers = router
  .get('/queryBarrages', routerController.queryBarrages)
  .post('/addBarrage', routerController.addBarrage)

module.exports = routers;