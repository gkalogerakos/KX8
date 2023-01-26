import React, { useState } from "react";

const alphabet = [
  "Α",
  "Β",
  "Γ",
  "Δ",
  "Ε",
  "Ζ",
  "Η",
  "Θ",
  "Ι",
  "Κ",
  "Λ",
  "Μ",
  "Ν",
  "Ξ",
  "Ο",
  "Π",
  "Ρ",
  "Σ",
  "Τ",
  "Υ",
  "Φ",
  "Χ",
  "Ψ",
  "Ω",
  "Α",
  "Β",
  "Γ",
  "Δ",
  "Ε",
  "Ζ",
  "Η",
  "Θ",
  "Ι",
  "Κ",
  "Λ",
  "Μ",
  "Ν",
  "Ξ",
  "Ο",
  "Π",
  "Ρ",
  "Σ",
  "Τ",
  "Υ",
  "Φ",
  "Χ",
  "Ψ",
  "Ω",
];

const english = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function LetterToNumber({ setRoute, navigate }) {
  const [grLetter, setGrLetter] = useState("Α");
  const [enLetter, setEnLetter] = useState("A");
  const [number, setNumber] = useState(1);

  const handleChange = (e) => {
    var inp = e.target.value,
      index;

    if (e.target.className === "input-l") {
      inp = inp.toUpperCase();
      if (e.target.name === "gr") {
        inp = inp.replace(grLetter, "");
        index = alphabet.indexOf(inp);
        if (index !== -1) {
          setGrLetter(inp);
          setNumber(index + 1);
        }
      } else {
        inp = inp.replace(enLetter, "");
        index = english.indexOf(inp);
        if (index !== -1) {
          setEnLetter(inp);
          setNumber(index + 1);
        }
      }
    } else {
      if (inp <= 24 && inp > 0) {
        setNumber(inp);
        setGrLetter(alphabet[parseInt(inp) - 1]);
        setEnLetter(english[parseInt(inp) - 1]);
      } else if (inp <= 26 && inp > 0) {
        setNumber(inp);
        setEnLetter(english[parseInt(inp) - 1]);
      } else if (inp > 26 && inp > 0) {
        inp = inp % 10;
        if (inp === 0) {
          inp = 1;
        }
        setNumber(inp);
        setGrLetter(alphabet[parseInt(inp) - 1]);
        setEnLetter(english[parseInt(inp) - 1]);
      }
    }
  };

  return (
    <div className="letter-number">
      <div className="letters">
        <div className="gr">
          <label htmlFor="gr">GR</label>
          <input
            type="text"
            className="input-l"
            name="gr"
            value={grLetter}
            onChange={handleChange}
          />
        </div>
        <div className="en">
          <label htmlFor="en">EN</label>
          <input
            type="text"
            className="input-l"
            name="en"
            value={enLetter}
            onChange={handleChange}
          />
        </div>
      </div>
      <input
        type="number"
        className="input-n"
        value={number}
        onChange={handleChange}
      />
    </div>
  );
}
