import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import sixth from "../assets/home/IMG_6889 2.png";
const Footer = () => {
  return (
    <>
      <div className="home-logoimage">
        <img src={logo} alt="logo" />
      </div>
      <div className="home-openings">
        <img src={sixth} alt="sixth" />
        <p className="opening-headings">
          WE ARE LOOKING FORWARD TO YOUR VISIT!
        </p>
        <p className="opening-time">
          OPENING HOURS <br /> <br /> Monday : ClosedTuesday - Friday : 11:00
          a.m. - 2:00 p.m., 5:30 p.m. - 11:30 p.m.
          <br /> <br /> Saturday : 5:30 p.m. - 11:30 p.m.Sunday : 11:00 a.m. -
          2:00 p.m., 5:30 p.m. - 10:00 p.m
        </p>
      </div>
      <div className="footer-container">
        <div className="footer-headings">
          <p>2023 All Right Reserved.</p>
          <Link to="https://haraaydesignstudio.com/">
            Made By Haraay Design Studio
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
