const apiModel = require('./../models/api');

const apiController = {
    async exampleTest(ctx) {
        let exampleData = await apiModel.getData(ctx);
        ctx.body = exampleData;
    }
};

module.exports = apiController;