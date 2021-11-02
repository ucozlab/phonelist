const { MongoClient } = require("mongodb");
// Connection URI
const connectionString = process.env.DATABASE;

const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;

module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, client) {
      if (err || !client) {
        return callback(err);
      }

      dbConnection = client.db("PhoneDB");
      console.log("Successfully connected to MongoDB.");

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
