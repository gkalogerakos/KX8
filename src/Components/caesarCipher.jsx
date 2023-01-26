/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

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
  "",
  "D",
  "E",
  "Z",
  "H",
  "U",
  "I",
  "K",
  "L",
  "M",
  "N",
  "J",
  "O",
  "P",
  "R",
  "S",
  "T",
  "Y",
  "F",
  "X",
  "C",
  "V",
];

export default function CaesarCipher() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [key, setKey] = useState(1);

  useEffect(() => {
    handleChange();
  }, [key]);

  const handleChange = () => {
    var text = document.getElementById("input").value.toUpperCase();
    var greek = [];
    text = text.split("");
    text.forEach((char) => {
      if (english.indexOf(char) !== -1) {
        greek.push(alphabet[english.indexOf(char)]);
      } else {
        greek.push(char);
      }
    });

    var newText = [];
    greek.forEach((char) => {
      if (char !== " ") newText.push(alphabet[alphabet.indexOf(char) + key]);
      else newText.push(" ");
    });
    greek = greek.join("");
    setInput(greek);
    text = newText.join("");
    setOutput(text);
  };

  const keyPressed = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      e.target.blur();
    }
  };

  const doNothing = (e) => {};

  const blur = (e) => {
    e.target.blur();
  };

  const up = () => {
    if (key < 23) setKey(key + 1);
    else setKey(1);
  };

  const down = () => {
    if (key > 1) setKey(key - 1);
    else setKey(23);
  };

  return (
    <div className="caesar-cipher">
      <textarea
        className="input"
        id="input"
        placeholder="Αρχικό κείμενο"
        value={input}
        onChange={handleChange}
        onKeyPress={keyPressed}
      />
      <div className="key-container">
        <button className="down unselectable" onClick={down}>
          ⇓
        </button>
        <input
          className="key"
          type="number"
          value={key}
          onFocus={blur}
          onChange={doNothing}
        />

        <button className="up unselectable" onClick={up}>
          ⇑
        </button>
      </div>
      <textarea
        className="output"
        placeholder="Τελικό κείμενο"
        value={output}
        onFocus={blur}
        onChange={doNothing}
      />
    </div>
  );
}
