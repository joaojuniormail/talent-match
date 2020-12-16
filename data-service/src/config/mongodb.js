const MongoClient = require("mongodb").MongoClient;

var connection, db;

let connect = (callback) => {
   if (connection) return callback(null, db);
   MongoClient.connect(process.env.MONGODB_CONNECTION, (err, conn) => {
      if(err) 
          return callback(err, null);
      else {
          connection = conn;
          db = conn.db(process.env.MONGODB_DATABASE);
          return callback(null, db);
      }
  })
}

let disconnect = () => {
   if(!connection) return true;
    connection.close();
    connection = null;
    return true;
}

module.exports = { connect, disconnect }