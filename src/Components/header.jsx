import React from "react";
import logo_i from "../Images/logo512.png";

export default function Header({ route, setRoute }) {
  const homePage = () => {
    setRoute("ΚΧΘ");
  };
  return (
    <div className="header">
      <img className="icon" src={logo_i} alt="logo" onClick={homePage} />
      <span className="title">{route}</span>
    </div>
  );
}
