const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const partyRoutes = require("./routes/PartyRoutes");
const scoreRoutes = require("./routes/ScoreRoutes");
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  res.end(
    "Routes available : /party (POST) , /party/current (GET,PUT) , /scores (GET)"
  );
});

app.use("/party", partyRoutes);

app.use("/scores", scoreRoutes);

app.listen(PORT);

module.exports.scores = [];
