const router = require('koa-router')();
const user = require('./user');
const record = require('./record');

// nestted routes
router.use('/user', user.routes(), user.allowedMethods());
router.use('/record', record.routes(), record.allowedMethods());

module.exports = router;