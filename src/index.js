const express = require("express");
const initializeApiRoutes = require("./api/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8800;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/", initializeApiRoutes());

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

module.exports = app;
