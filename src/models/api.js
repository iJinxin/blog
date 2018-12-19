/**
 * api module - model level
 */
const mongoServer = require('./../../db/server');
const apiModel = {
    async getData () {
        // db
        console.log('testing');
        let response = null;
        const database = mongoServer.getMongoServer();
        // const result = await database.collection('user').find();
        // console.log(result);
        response = await database.collection('user').find({}).toArray();
        console.log(response);
        return response;
        
    }
};

module.exports = apiModel;