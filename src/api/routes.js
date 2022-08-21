const { Router } = require("express");
const v1Routes = require("./v1/v1.routes");

const initializeApiRoutes = () => {
  const router = Router();
  router.use("/v1/", v1Routes());
  console.log(`Routes initialized`);
  return router;
};
module.exports = initializeApiRoutes;
