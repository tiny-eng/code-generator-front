import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/Navbar.css"
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          CodeGen
        </Link>
      </h1>
      <Link to="/signin" className="navbar-btn">
        <FontAwesomeIcon icon={faSignIn} /> Sign In
      </Link>
    </div>
  );
}

export default Header;
