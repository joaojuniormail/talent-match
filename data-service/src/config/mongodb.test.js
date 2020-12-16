const test = require('tape');
const mongodb = require('./mongodb');

let runTests = () => {
    test('MongoDB Connection', (t) => {
        mongodb.connect((err, conn) => {
            console.error(err);
            t.assert(conn, "Connection established");
            t.end();
        });
    })

    test('MongoDB Disconnection', (t) => {
        t.assert(mongodb.disconnect(), "Disconnected");
        t.end();
    })
}

module.exports = { runTests }