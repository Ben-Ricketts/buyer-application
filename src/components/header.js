import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  function HandleHomeClick() {
    navigate("/");
  }

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <header className="Header">
      <button onClick={HandleHomeClick} className="home">
        Home
      </button>
      <button onClick={handleLoginClick} className="login">
        LOGIN
      </button>
    </header>
  );
}

export default Header;
