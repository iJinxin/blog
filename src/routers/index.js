const router = require('koa-router')();
const user = require('./user');
const record = require('./record');
const canvas = require('./canvas');

// nestted routes
router.use('/user', user.routes(), user.allowedMethods());
router.use('/record', record.routes(), record.allowedMethods());
router.use('/canvas', canvas.routes(), canvas.allowedMethods());

module.exports = router;