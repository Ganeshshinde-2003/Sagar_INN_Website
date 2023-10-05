import React from "react";
import "./style.css";
import logo from "../assets/logo-hotle.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const currentPath = useLocation();

  return (
    <div className="navbar-container">
      <div
        className={`navbar-home ${
          currentPath.pathname === "/menu" ? "active" : ""
        }`}
      >
        <Link to="/menu">
          Menu{" "}
          {currentPath.pathname === "/menu" ? (
            <IoIosArrowUp />
          ) : (
            <IoIosArrowDown />
          )}
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
