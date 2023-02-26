import React from "react";
import "./Keyboard.css"
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

function Keyboard() {
  return (
    <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
      gap: ".5rem",
    }}
    >
      {KEYS.map(elm=> <button key={elm} className="btn">{elm}</button>)}
    </div>
  );
}

export default Keyboard;

