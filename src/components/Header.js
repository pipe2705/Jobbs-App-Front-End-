import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>JOBBBBBSSSSS</h1>
      <nav>
        <Link to={"/"}>Home | </Link>
        <Link to={"/jobs"}>Jobs</Link>
      </nav>
    </header>
  );
};
export default Header;
