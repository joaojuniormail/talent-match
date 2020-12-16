require("dotenv-safe").config();
const api = require('./api/api');
const server = require("./server/server");
const repository = require("./repository/repository");

server.start(api, repository, (err, app) => { 
    console.log("just started");
});