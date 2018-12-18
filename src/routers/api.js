// /api module
const router = require('koa-router')();
const apiController = require('./../controllers/api');

const routers = router
    .get('/example', apiController.exampleTest)

module.exports = routers;