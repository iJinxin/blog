/**
 * api module - model level
 */
const mongoServer = require('./../../db/server');
const Operations = require('./../../db/operations');
const apiModel = {
    async getData () {
        const response = await Operations.find('user', {});
        return response;
    }
};

module.exports = apiModel;