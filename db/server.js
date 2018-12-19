const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const config = require('../config');

// mongo database对象
let mongoServer = null;

// 初始连接，只连接一次
const initConnection = function(callback) {
    const connectionOptions = {
        poolSize: 30
    };
    MongoClient.connect(config.mongodb.url, connectionOptions, (err, client) => {
        assert.equal(null, err);
        mongoServer = client.db(config.mongodb.name);

        if (callback && typeof callback === 'function') {
            callback(mongoServer)
        }
    });
}

// 获取mongo database对象，操作mongodb
const getMongoServer = function() {
    return mongoServer;
}

module.exports = {
    initConnection,
    getMongoServer
};