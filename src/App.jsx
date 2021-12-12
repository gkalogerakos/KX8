import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Header from "./Components/header.jsx";
import Home from "./Components/home.jsx";
import Dates from "./Components/dates.jsx";
import Anagram from "./Components/anagram.jsx";
import StreetLetters from "./Components/streetLetters.jsx";
import CaesarCipher from "./Components/caesarCipher.jsx";
import roads from "./Data/roads.json";

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
        <Route path="/anagram" element={<Anagram />}></Route>
        <Route
          path="/streetletters"
          element={<StreetLetters roads={roads} />}
        ></Route>
        <Route path="/caesarcipher" element={<CaesarCipher />}></Route>
      </Routes>
    </div>
  );
}

export default App;
