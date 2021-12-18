import React, { useState } from "react";
import getAnagrams from "../Functions/anagram";

export default function Anagram({ roads }) {
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
  ];

  const english = [
    "A",
    "B",
    "G",
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

  const [input, setInput] = useState("");
  const [overflow, setOverflow] = useState(false);
  const [anagramRoads, setAnagramRoads] = useState([]);

  var i = 1;

  const handleChange = (e) => {
    var text = e.target.value.toUpperCase();
    var greek = [];
    text = text.split("");
    text.forEach((char) => {
      if (english.indexOf(char) !== -1) {
        greek.push(alphabet[english.indexOf(char)]);
      } else {
        greek.push(char);
      }
    });
    greek = greek.join("");
    setInput(greek);
    if (greek !== "") {
      var newArr = getAnagrams(greek, roads);
      setAnagramRoads(newArr);
      if (newArr.length > 15) setOverflow(true);
      else setOverflow(false);
    } else {
      setAnagramRoads([]);
      setOverflow(false);
    }
  };
  return (
    <div className="anagram">
      <input className="anagram-input" value={input} onChange={handleChange} />
      <div
        className={
          overflow
            ? "results-container overflow"
            : input === ""
            ? "empty"
            : "results-container"
        }
      >
        <div className="results">
          {anagramRoads.map((road) => (
            <p key={i++}>{i + ". " + road}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
