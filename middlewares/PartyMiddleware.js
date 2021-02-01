module.exports = async (req, res, next) => {
  if (res.party.currentParty === null) {
    res.status(401).end("You should start a party on (POST) /party");
  } else {
    next();
  }
};
