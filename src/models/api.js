/**
 * api module - model level
 */
const apiModel = {
    async getData () {
        // db
        let result = {
            id: 1,
            title: 'example'
        };
        return result;
    }
};

module.exports = apiModel;