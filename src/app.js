const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyParser = require('koa-body-parser');
const path = require('path');

const config = require('./../config');
const routers = require('./routers/index');
const cors = require('@koa/cors');
// const error = require('./middleware/error');
const error = require('koa-error');
const mongoServer = require('./../db/server');
mongoServer.initConnection();

// error handler
app.use(error());

// 解析body
app.use(bodyParser());

// 日志
app.use(logger());

// 跨域
app.use(cors());

// 初始化路由
app.use(routers.routes())
app.use(routers.allowedMethods());

app.on('error', (err, ctx) => {
  // logger.error('server error', err, ctx);
})

// start
app.listen(config.port);
console.log(`the server running at port: ${config.port}`);
