import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import first from "../assets/home/brooke-lark-oaz0raysASk-unsplash 1.png";
import "./style.css";

const MenuPage = () => {
  return (
    <div className="menu-container">
      <div className="menu-firstpart">
        <p className="menu-headings">WE WELCOME YOU.</p>
        <p className="menu-disc">
          Reserve a table today and indulge your sense of taste.
        </p>
        <IoIosArrowRoundForward className="menu-arrow" />
        <div className="menu-links">
          <Link to="/">Menu</Link>
          <Link to="/">Wine list</Link>
        </div>
      </div>
      <div className="menu-secpart">
        <div className="menu-items">
          <Link className="menu-item" to="/">
            Home
          </Link>
          <Link className="menu-item" to="/aboutus">
            About us
          </Link>
        </div>
        <div className="menu-items">
          <Link className="menu-item" to="/">
            Offers
          </Link>
          <Link className="menu-item" to="/">
            Contact
          </Link>
        </div>
        <img src={first} alt="imagefirst" />
      </div>
    </div>
  );
};

export default MenuPage;
