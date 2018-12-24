// mongodb 操作
// 基本增删改查
const mongoServer = require('./server');

/**
* 增加一个元素
* @param col: target collection
* @param doc: document
* @param options: [optional] settings
*/
const insertOne = async (col, doc, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).insertOne(doc, options);
    return res;
};

/**
* 增加多个元素
* @param col: target collection
* @param docs: Array.<object> documents to insert
* @param options: [optional] settings
*/
const insertMany = async (col, docs, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).insertMany(docs, options);
    return res;
}

/**
* 删除一个元素
* @param col: target collection
* @param filter: target document
* @param options: [optional] settings
*/
const deleteOne = async (col, filter, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).deleteOne(filter, options);
    return res;
}

/**
* 删除多个元素
* @param col: target collection
* @param filter: target documents
* @param options: [optional] settings
*/
const deleteMany = async (col, filters, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).deleteMany(filters, options);
    return res;
}

/**
* 修改一个元素
* @param: col: target collection
* @param filter: old document
* @param update: new document
* @param options: [optional] settings
*/
const updateOne = async (col, filter, update, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).updateOne(filter, {
        $set: update
    }, options);
    return res;
}

/**
* 修改多个元素
* @param: col: target collection
* @param filter: old documents
* @param update: new documents
* @param options: [optional] settings
*/
const updateMany = async (col, filters, update, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const res = await DBserver.collection(col).updateMany();
    return res;
}

/**
* 查找
* @param col: target collection
* @param query: [optional] 查询参数
* @param options: [optional] settings，分页等
*/
const find = async (col, query, options) => {
    const DBserver = await mongoServer.getMongoServer();
    try {
        const docs = await DBserver.collection(col).find(query, options).toArray();
        return docs;
    } catch(error) {
        console.log(error);
    }
}

/**
 * 查找一个返回第一个匹配的document
 * @param col: target collection
 * @param query: [optional] 查询参数
 * @param options: [optional] setting
 */
const findOne = async (col, query, options) => {
    const DBserver = await mongoServer.getMongoServer();
    const doc = await DBserver.collection(col).findOne(query, options);
    return doc;
}

module.exports = {
    insertOne,
    insertMany,
    deleteOne,
    deleteMany,
    updateOne,
    updateMany,
    find,
    findOne,
}