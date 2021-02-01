const express = require("express");
const router = express.Router();

const printScore = require("../services/ScoresService");

router.get("/", async function (req, res) {
  res.end(printScore());
});

module.exports = router;
