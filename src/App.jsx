import React, { useState } from "react";
import Header from "./Components/header.jsx";
import Home from "./Components/home.jsx";
import Dates from "./Components/dates.jsx";

function App() {
  const [route, setRoute] = useState("ΚΧΘ");

  return (
    <div className="body">
      <Header route={route} setRoute={setRoute} />
      {route === "ΚΧΘ" && <Home setRoute={setRoute} />}
      {route === "ΗΜΕΡΟΜΗΝΙΕΣ" && <Dates />}
    </div>
  );
}

export default App;
