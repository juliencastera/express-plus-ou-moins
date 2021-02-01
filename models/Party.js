class Party {
  number = null;
  guesses = [];
  score = null;
  solved = false;
  tries = 0;

  static currentParty = null;

  constructor(min, max) {
    this.number = Math.floor(Math.random() * (max - min) + min);
  }

  guess(input) {
    const inputNb = +input;
    if (isNaN(inputNb)) {
      throw new Error("Input is not a number");
    }

    this.tries++;
    this.guesses.push(input);

    if (inputNb > this.number) return "-";
    if (inputNb < this.number) return "+";

    this.solved = true;
    this.score = this.tries;

    return "=";
  }

  showGuesses() {
    let text = "During this game : ";
    for (let i = 0; i < this.guesses.length; i++) {
      text += `You tried the guess ${this.guesses[i]}. `;
    }

    return text;
  }
}

module.exports = Party;
