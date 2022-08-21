const awsServerlessExpress = require("aws-serverless-express");
const app = require("./src/index");

const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return awsServerlessExpress.proxy(server, event, context);
};
