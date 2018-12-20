/**
 * api module - model level
 */
const mongoServer = require('./../../db/server');
const Operations = require('./../../db/operations');
const apiModel = {
    async getData () {
        // db
        console.log('testing');
        let response = null;
        const database = mongoServer.getMongoServer();
        // response = await database.collection('user').find({}).toArray();
        response = await Operations.find('user', {});
        console.log(response);
        return response;
        
    }
};

module.exports = apiModel;