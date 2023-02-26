import React from "react";
import "./Keyboard.css";
const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
interface Props {
  activeLetter ?: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled:boolean
}

function Keyboard({ activeLetter, inactiveLetters, addGuessedLetter ,disabled=false}: Props) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((elm) => {
        const isActive = activeLetter.includes(elm);
        const isInactive = inactiveLetters.includes(elm);
        return (
          <button
         
            key={elm}
            className={`btn ${isActive ? "active" : ""} ${
              isInactive ? "inactive" : ""
            }`}
            onClick={() => addGuessedLetter(elm)}
            disabled={isActive || isInactive || disabled}
          >
            {elm}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
