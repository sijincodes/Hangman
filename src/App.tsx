import { useEffect, useState, useCallback } from "react";
import HangmanDrawing from "./HangmanDrawing";
import HangmanWord from "./HangmanWord";
import Keyboard from "./Keyboard";

import words from "./wordList.json";

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)];
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (elm) => !wordToGuess.includes(elm)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => {
    guessedLetters.includes(letter);
  });

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "2rem",
          textAlign: "center",
        }}
      >
        {isWinner && "Winner -- Refresh to play again"}
        {isLoser && "You Lost -- No worries ! Refresh to play again"}
      </div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} reveal={isLoser} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetter={guessedLetters.filter((elm) =>
            wordToGuess.includes(elm)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
