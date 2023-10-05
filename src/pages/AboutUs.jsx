import React from "react";
import "./style.css";
import first from "../assets/home/thibault-penin-uqd-Eq1_TtE-unsplash 1.png";
import sec from "../assets/home/andrea-de-santis-DbMZgyFrycw-unsplash 1.png";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="home-firstimage">
        <img src={first} alt="first" />
        <p>
          TRADITION UNITED WITH <br />
          CREATIVITY
        </p>
      </div>
      <div className="about-secpart">
        <p className="about-headings">
          LONG TRADITION <br /> <span>AND NUMEROUS</span>
          <br />
          <span>SATISFIED GUESTS</span>
        </p>
        <div className="about-imgtextpart">
          <div className="about-imgpart">
            <img src={sec} alt="second" />
          </div>
          <div className="about-textpart">
            <p className="about-textpart-head">
              A PLACE WITH A LONG HISTORY AND A TEAM THAT IS MOTIVATED TO ENSURE
              AN ENJOYABLE PRESENT AND FUTURE.
            </p>
            <p className="about-textpart-disc">
              The heart of the restaurant, the vaulted cellar, is the oldest in
              the canton of Aargau. It was built in 1743, next to the Aare as an
              important trade route. In 2008, Dini Hasani founded La Perla and
              the vault became a stylish place for culinary enjoyment.
              <br />
              <br /> The dedicated kitchen at La Perla turns classic dishes into
              new, innovative taste miracles with creativity and great
              expertise. Dini Hasani and his team will be happy to welcome you
              to the gastronomic gem on the Aare.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
