import React from "react";

export default function Home({ setRoute, navigate }) {
  const handleClick = (e) => {
    switch (e.target.id) {
      case "dates":
        setRoute("ΗΜΕΡΟΜΗΝΙΕΣ");
        navigate("/dates");
        break;
      case "anagram":
        setRoute("ΑΝΑΓΡΑΜΑΤΙΣΜΟΣ");
        navigate("/anagram");
        break;
      case "streets":
        setRoute("ΓΡΑΜΜΑΤΑ ΔΡΟΜΩΝ");
        navigate("/streetletters");
        break;
      case "caesar":
        setRoute("ΚΩΔΙΚΑΣ ΚΑΙΣΑΡΑ");
        navigate("/caesarcipher");
        break;
      default:
        setRoute("ΚΧΘ");
    }
  };

  return (
    <div className="home">
      <button className="home-btn" id="dates" onClick={handleClick}>
        ΗΜΕΡΟΜΗΝΙΕΣ ΚΧΘ
      </button>
      <button className="home-btn" id="anagram" onClick={handleClick}>
        ΑΝΑΓΡΑΜΜΑΤΙΣΜΟΣ
      </button>
      <button className="home-btn" id="streets" onClick={handleClick}>
        ΓΡΑΜΜΑΤΑ ΔΡΟΜΟΥ
      </button>
      <button className="home-btn" id="caesar" onClick={handleClick}>
        ΚΩΔΙΚΑΣ ΚΑΙΣΑΡΑ
      </button>
      {/* <button className="home-btn"></button> */}
    </div>
  );
}
