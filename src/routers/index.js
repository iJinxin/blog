const router = require('koa-router')();
const api = require('./api');
const user = require('./user');

// nestted routes
router.use('/api', api.routes(), api.allowedMethods());
router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;