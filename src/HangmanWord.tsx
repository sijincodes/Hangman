import React from "react";

interface Props {
  guessedLetters : string[],
  wordToGuess: string,
  reveal ?:boolean
}


function HangmanWord({guessedLetters,wordToGuess,reveal=false}:Props) {
 
  return (
    <div
      style={{
        display: "flex",
        gap: "0.25em",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >{
      wordToGuess.split('').map((elm,index)=>
        <span key={index} style={{borderBottom:"0.1em solid black"}}>
          <span style={{visibility:guessedLetters.includes(elm)|| reveal ? "visible" : "hidden",
        color: !guessedLetters.includes(elm)&& reveal ? "red" : "black" }}>{elm}</span>
        </span>
      )
    }</div>
  );
}

export default HangmanWord;
