import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-headings">
        <p>2023 All Right Reserved.</p>
        <Link to="https://haraaydesignstudio.com/">
          Made By Haraay Design Studio
        </Link>
      </div>
    </div>
  );
};

export default Footer;
