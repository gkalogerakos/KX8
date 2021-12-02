import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./Components/header.jsx";
import Home from "./Components/home.jsx";
import Dates from "./Components/dates.jsx";

function App() {
  const [route, setRoute] = useState("ΚΧΘ");
  let navigate = useNavigate();
  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/home");
    }
  }, [location.pathname, navigate]);

  return (
    <div className="body">
      <Header route={route} setRoute={setRoute} navigate={navigate} />

      <Routes>
        <Route
          path="/home"
          element={<Home setRoute={setRoute} navigate={navigate} />}
        ></Route>
        <Route path="/dates" element={<Dates />}></Route>
      </Routes>
    </div>
  );
}

export default App;
