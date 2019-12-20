import React from "react";
import { Link } from "react-router-dom";
import "../app.css";

const Header = () => {
  return (
    <header>
      <h1>The JOBBS App </h1>
      <nav>
        <Link to={"/"}> Home 🏠 </Link>
        <Link to={"/jobs"}> Job List 💼 </Link>
      </nav>
    </header>
  );
};

export default Header;
