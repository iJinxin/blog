// mongodb 操作
// 基本增删改查
class MongoOperations {
    constructor(db) {
        this.db = db;
    }
    /**
     * 增加一个元素
     * @param col: target collection
     * @param doc: document
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    insertOne(col, doc, options, callback) {
        this.db.collection(col).insertOne(doc, options, callback);
    }

    /**
     * 增加多个元素
     * @param col: target collection
     * @param docs: Array.<object> documents to insert
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    insertMany(col, docs, options, callback) {
        this.db.collection(col).insertMany(docs, options, callback);
    }

    /**
     * 删除一个元素
     * @param col: target collection
     * @param filter: target document
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    deleteOne(col, filter, options, callback) {
        this.db.collection(col).deleteOne(filter, options, callback);
    }

    /**
     * 删除多个元素
     * @param col: target collection
     * @param filter: target documents
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    deleteMany(col, filter, options, callback) {
        this.db.collection(col).deleteMany(filter, options, callback);
    }

    /**
     * 修改一个元素
     * @param: col: target collection
     * @param filter: old document
     * @param update: new document
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    updateOne(col, filter, update, options, callback) {
        this.db.collection(col).updateOne(filter, {
            $set: update
        }, options, callback);
    }

    /**
     * 修改多个元素
     * @param: col: target collection
     * @param filter: old documents
     * @param update: new documents
     * @param options: [optional] settings
     * @param callback: [optional] callback
     */
    updateMany(col, filter, update, options, callback) {
        this.db.collection(col).updateOne(filter, {
            $set: update
        }, options, callback);
    }

    /**
     * 查找
     * @param col: target collection
     * @param query: [optional] 查询参数
     * @param options: [optional] settings，分页等
     */
    find(col, query, options) {
        this.db.collection(col).find(query, options);
    }
}
module.exports = MongoOperations;