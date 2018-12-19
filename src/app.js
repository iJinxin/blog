const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const path = require('path');

const config = require('./../config');
const routers = require('./routers/index');
const mongoServer = require('./../db/server');
mongoServer.initConnection();

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// const client = new MongoClient(config.mongdb.host);
// client.connect((error, client) => {
//   assert.equal(null, error);
//   const db = client.db(config.mongdb.name);
//   db.collection('user').insertOne({name: 'jinxin'}, () => {
//     console.log('assert success!');
//   })
// })


// error handler

// middlewares
app.use(bodyParser({
  enableTypes:['json', 'form', 'text']
}));

// 日志
app.use(logger());

// // 配置ctx.body解析中间件
// app.use(bodyParser());

// 初始化路由
app.use(routers.routes())
app.use(routers.allowedMethods());

// start
app.listen(config.port);
console.log(`the server running at port: ${config.port}`);
