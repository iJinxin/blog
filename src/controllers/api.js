const apiModel = require('./../models/api');

const apiController = {
    async exampleTest(ctx) {
        let exampleData = await apiModel.getData(ctx);
        console.log(exampleData);
        ctx.body = exampleData;
    }
};

module.exports = apiController;