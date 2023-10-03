import React from "react";
import "./style.css";
import logo from "../assets/logo-hotle.png";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-home">
        <Link to="/">
          Home <IoIosArrowDown />
        </Link>
      </div>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="navbar-reservation">
        <Link to="/">Reservations</Link>
      </div>
    </div>
  );
};

export default Navbar;
