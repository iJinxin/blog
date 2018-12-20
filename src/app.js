const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const path = require('path');

const config = require('./../config');
const routers = require('./routers/index');
const cors = require('./middleware/cors');
const mongoServer = require('./../db/server');
mongoServer.initConnection();

// error handler

// middlewares
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}));

// 日志
app.use(logger());

// 跨域
app.use(cors());

// 初始化路由
app.use(routers.routes())
app.use(routers.allowedMethods());

// start
app.listen(config.port);
console.log(`the server running at port: ${config.port}`);
