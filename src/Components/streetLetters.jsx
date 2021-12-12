import React, { useState } from "react";

export default function StreetLetters({ roads }) {
  const numbers = [
    "2",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  var i = 1;

  const [selectNumber, setSelectNumber] = useState("");
  const [letterRoads, setLetterRoads] = useState([]);
  const [overflow, setOverflow] = useState(false);

  const handleChange = (e) => {
    setSelectNumber(e.target.value);
    var newArr = [];
    roads.forEach((road) => {
      if (road.length === parseInt(e.target.value)) {
        newArr.push(road);
      }
    });
    setLetterRoads(newArr);
    if (newArr.length > 15) setOverflow(true);
    else setOverflow(false);
  };

  return (
    <div className="street-letters">
      <select className="select" value={selectNumber} onChange={handleChange}>
        <option value="" hidden={true}>
          -
        </option>
        {numbers.map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <div
        className={
          overflow
            ? "results-container overflow"
            : selectNumber === ""
            ? "empty"
            : "results-container"
        }
      >
        <div className="results">
          {letterRoads.map((road) => (
            <p key={i++}>{i + ". " + road}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
