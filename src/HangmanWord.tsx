import React from "react";

function HangmanWord() {
  const word="sijin"
  const guessedLetters=['i', "m"]
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
      word.split('').map((elm,index)=>
        <span key={index} style={{borderBottom:"0.1em solid black"}}>
          <span style={{visibility:guessedLetters.includes(elm)?"visible" : "hidden"}}>{elm}</span>
        </span>
      )
    }</div>
  );
}

export default HangmanWord;
