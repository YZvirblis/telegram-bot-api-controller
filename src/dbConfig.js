// require("dotenv").config();
const { MongoClient } = require("mongodb");
const mongoUri = process.env.MONGO_CONNECTION_STRING;
// const mongoClient = new MongoClient(mongoUri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   serverApi: ServerApiVersion.v1,
// });
// const clients = mongoClient.db("TelegramBot").collection("Clients");
let cachedDB = null;

const connectToDatabase = async () => {
  if (cachedDB) {
    console.log("Use existing connection");
    return Promise.resolve(cachedDB);
  } else {
    return await MongoClient.connect(mongoUri)
      .then((client) => {
        cachedDB = client.db("TelegramBot");
        console.log("NEW DATABASE CONNECTION");
        return cachedDB;
      })
      .catch((err) => {
        console.log("MONGO ERROR: ", err);
      });
  }
};

module.exports = { connectToDatabase };
