const { Router } = require("express");
const {
  createClientHandler,
  editClientHandler,
  deleteClientHandler,
} = require("../handlers/client.handler");

const ClientController = () => {
  const router = Router();
  router.post("/create", createClient);
  router.put("/edit", editClient);
  router.delete("/delete", deleteClient);
  router.get("/test", test);

  return router;
};

const test = (request, response) => {
  console.log(request);
  response.status(200).json("Everything seems to be working.");
};

// CREATE CLIENT
const createClient = async (request, response, next) => {
  const { client } = request.body;
  const res = await createClientHandler(client);
  response.status(res.status).json(res.message);
};

// EDIT CLIENT
const editClient = async (request, response, next) => {
  console.log(request.body);
  const { client } = request.body;
  const res = await editClientHandler(client.username, client);
  response.status(res.status).json(res.message);
};

// DELETE CLIENT
const deleteClient = async (request, response, next) => {
  const { username } = request.body;
  const res = await deleteClientHandler(username);
  response.status(res.status).json(res.message);
};

module.exports = { ClientController };
