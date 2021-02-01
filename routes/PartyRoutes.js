const express = require("express");
const router = express.Router();
const Party = require("../models/party");
const PartyMiddleware = require("../middlewares/PartyMiddleware");

const globals = require("../app");

router.use(async function (req, res, next) {
  res.party = Party;
  next();
});

router.post("/", async function (req, res, next) {
  if (req.body.min === undefined || req.body.max === undefined) {
    res.end("Body should have min and max properties.");
  } else {
    next();
  }
});

// Start game
router.post("/", async function (req, res) {
  Party.currentParty = new Party(req.body.min, req.body.max);

  res.party = Party;

  console.log(
    `[DEBUG] Party winnable number is : ${Party.currentParty.number}`
  );

  res.end("Party started. Good luck.");
});

router
  .route("/current")
  .get(PartyMiddleware, async (req, res) => {
    res.end(Party.currentParty.showGuesses());
  })
  .put(PartyMiddleware, async (req, res) => {
    if (!req.body.number) {
      res.end("Body should have number property.");
    }

    let guess = Party.currentParty.guess(req.body.number);

    if (Party.currentParty.solved === true) {
      globals.scores.push(Party.currentParty.score);
    } else if (guess === "-") {
      res.end(`Less ! You tried ${Party.currentParty.tries} times`);
    } else {
      res.end(`More! You tried ${Party.currentParty.tries} times`);
    }

    res.end(
      `You won ! The number was ${Party.currentParty.number}. You got a score of ${Party.currentParty.score}`
    );
  });

module.exports = router;
