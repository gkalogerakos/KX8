import React, { useState, useEffect } from "react";
import getDates from "../Functions/dates.js";

export default function Dates() {
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

  const [seletcYear, setSelectYear] = useState();

  const handleChange = (e) => {
    setSelectYear(e.target.value);
  };

  useEffect(() => {
    const d = Date;
    const year = d.getFullYear;
    const month = d.getMonth;
    const date = d.getDate;
    const lastDate = getDates(date, month, year);
    if (
      lastDate.month < month ||
      (lastDate.month === month && lastDate.date < date)
    ) {
      setSelectYear(year + 1);
    } else {
      setSelectYear(year);
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
    </div>
  );
}
