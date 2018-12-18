const router = require('koa-router')();
const api = require('./api');

// nestted routes
router.use('/api', api.routes(), api.allowedMethods());

module.exports = router;