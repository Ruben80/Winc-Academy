let tries = 0;

const functions = {
  // starten van de game d.m.v. het kiezen van het woord

  winningWord: (list) => {
    const index = Math.floor(Math.random() * list.length);
    // word = list[index].split("");
    return list[index].split("");
  },

  // checken of een letter voorkomt in het woord

  letterInput: (testWord, testLetter) => {
    let letterGuessed = false;
    if (testWord.includes(testLetter)) {
      letterGuessed = true;
    }
    return letterGuessed;
  },

  // updaten van het aantal pogingen van de gebruiker

  attemptsCheck: (wrongGuessedLetter, wordToTest) => {
    const validatedValue = functions.letterInput(
      wordToTest,
      wrongGuessedLetter
    );
    if (validatedValue) {
      return;
    } else {
      tries++;
      return false;
    }
  },

  // updaten van de lijst met letters die al geraden zijn door de gebruiker

  guessedLetters: (word, inputs) => {
    const wrongLetters = inputs.filter((letter) => {
      return !word.includes(letter);
    });
    return wrongLetters;
  },

  // verliezen van de game wanneer er geen pogingen meer over zijn

  checkLosing: (tries) => {
    if (tries === 5) {
      return true;
    } else {
      return false;
    }
  },

  // winnen van de game

  checkWinning: (word, inputs) => {
    let remaining = word.filter((letter) => {
      return !inputs.includes(letter);
    });
    if (remaining.length === 0) {
      return true;
    } else {
      return false;
    }
  },

};

module.exports = functions;