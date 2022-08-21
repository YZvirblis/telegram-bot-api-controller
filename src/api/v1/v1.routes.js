const { Router } = require("express");
const { ClientController } = require("./controllers/client.controller");

const v1Routes = () => {
  const router = Router();
  router.use("/client", ClientController());
  router.get("/ping", (req, res) => {
    res.status(200).json("PONG");
  });

  return router;
};

module.exports = v1Routes;
