const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const config = require('../config');

const client = new MongoClient(config.mongdb.host);

client.connect((error) => {
    assert.equal(null, error);
    console.log("connect successful to server");

    const db = client.db('test');
})
