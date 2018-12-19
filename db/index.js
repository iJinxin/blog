const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const Collections = require('./collections');

class MongoServer {
    constructor(option) {
        this.client = new MongoClient(option.host);
        this.port = option.port;
        this.db = null;
    }
    init() {
        this.client.connect((res) => {
            assert.equal(null, res);
            this.db = this.client.db(this.port);
            this.initCollections();
        });
    }
    initCollections() {
        Object.keys(Collections).forEach((key) => {
            this.db.createCollection(key);
        });
    }
}
module.exports = MongoServer;