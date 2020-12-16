const mongodb = require("../config/mongodb");

let getAll = (collection) => (callback) => {
    mongodb.connect((err, db) => {
        db.collection(collection).find().toArray(callback);
    })
}

let getByFilter = (collection) => (filter, callback) => {
    mongodb.connect((err, db) => {
        db.collection(collection).find(filter).toArray(callback);
    })
}

let getById = (collection) => (id, callback) => {
    mongodb.connect((err, db) => {
        db.collection(collection).find({_id: require("mongodb").ObjectId(id)}, callback);
    });
}

let disconnect = () => {
    return mongodb.disconnect();
}

module.exports = { getAll, getByFilter, getById, disconnect}