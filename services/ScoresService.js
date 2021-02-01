const globals = require("../app");

const printScore = (scores) => {
  let sortedScores = globals.scores.sort((a, b) => b - a);
  let scoreLength = sortedScores.length >= 10 ? 10 : sortedScores.length;
  let text = "";
  for (let i = 0; i < scoreLength; i++) {
    text += `Top ${i}: ${sortedScores[i]} - `;
  }
  return text;
};

module.exports = printScore;
