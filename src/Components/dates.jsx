/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import getDates from "../Functions/dates.js";

export default function Dates() {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const [seletcYear, setSelectYear] = useState();
  const [kx8dates, setKX8dates] = useState({
    first: { date: "", month: "" },
    second: { date: "", month: "" },
    party: { date: "", month: "" },
    third: { date: "", month: "" },
    parade: { date: "", month: "" },
    awards: { date: "", month: "" },
    trip: { date: "", month: "" },
    CM: { date: "", month: "" },
  });

  const handleChange = (e) => {
    setSelectYear(e.target.value);
    setKX8dates(getDates(e.target.value));
  };

  useEffect(() => {
    const d = new Date();
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();
    const dates = getDates(year);
    if (
      dates.CM.month < month ||
      (dates.CM.month === month && dates.CM.date < date)
    ) {
      setSelectYear(year + 1);
      setKX8dates(getDates(year + 1));
    } else {
      setSelectYear(year);
      setKX8dates(getDates(year));
    }
  }, []);

  return (
    <div className="dates">
      <select className="select" value={seletcYear} onChange={handleChange}>
        {years.map((year) => (
          <option value={year} key={year}>
            {year}
          </option>
        ))}
      </select>
      <div className="container">
        <div className="first event">
          <div className="text">Προπομπός</div>
          <div className="date">
            {kx8dates.first.date + "/" + kx8dates.first.month}
          </div>
        </div>
        <div className="second event">
          <div className="text">2o Σαφάρι</div>
          <div className="date">
            {" "}
            {kx8dates.second.date + "/" + kx8dates.second.month}
          </div>
        </div>
        <div className="party event">
          <div className="text">Τσικνοπάρτυ</div>
          <div className="date">
            {" "}
            {kx8dates.party.date + "/" + kx8dates.party.month}
          </div>
        </div>
        <div className="third event">
          <div className="text">Μεγάλο Σαφάρι</div>
          <div className="date">
            {" "}
            {kx8dates.third.date + "/" + kx8dates.third.month}
          </div>
        </div>
        <div className="parade event">
          <div className="text">Παρέλαση</div>
          <div className="date">
            {" "}
            {kx8dates.parade.date + "/" + kx8dates.parade.month}
          </div>
        </div>
        <div className="awards event">
          <div className="text">Απονομές</div>
          <div className="date">
            {" "}
            {kx8dates.awards.date + "/" + kx8dates.awards.month}
          </div>
        </div>
        <div className="trip event">
          <div className="text">Εκδρομή</div>
          <div className="date">
            {" "}
            {kx8dates.trip.date + "/" + kx8dates.trip.month}
          </div>
        </div>
      </div>
    </div>
  );
}
