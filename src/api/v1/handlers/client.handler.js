// import bcrypt from "bcrypt";
// const { clients } = require("../../../dbConfig");
const { connectToDatabase } = require("../../../dbConfig");

const createClientHandler = async (client) => {
  try {
    const db = await connectToDatabase();
    const clients = await db.collection("Clients");
    const res = await clients.insertOne(client);
    console.log("CREATE CLIENT SUCCESS: ", res);
    return { status: 200, message: res };
  } catch (err) {
    console.log("CREATE CLIENT ERROR: ", err);
    return { status: 400, message: err };
  }
};

const editClientHandler = async (username, client) => {
  try {
    const db = await connectToDatabase();
    const clients = await db.collection("Clients");
    const res = await clients.findOneAndUpdate({ username }, { $set: client });
    console.log("EDIT CLIENT SUCCESS: ", res);
    return { status: 200, message: res };
  } catch (err) {
    console.log("EDIT CLIENT ERROR: ", err);
    return { status: 400, message: err };
  }
};

const deleteClientHandler = async (chatID) => {
  try {
    const db = await connectToDatabase();
    const clients = await db.collection("Clients");
    const res = await clients.findOneAndDelete({ chatID });
    console.log("DELETE CLIENT SUCCESS: ", res);
    return { status: 200, message: res };
  } catch (err) {
    console.log("DELETE CLIENT ERROR: ", err);
    return { status: 400, message: err };
  }
};

module.exports = {
  createClientHandler,
  editClientHandler,
  deleteClientHandler,
};
