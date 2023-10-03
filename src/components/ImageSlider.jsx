import React, { useState } from "react";
import img1 from "../assets/home/brooke-lark-oaz0raysASk-unsplash 2.png";
import img2 from "../assets/home/yves-cedric-schulze-oaM9nFZmMYI-unsplash 1.png";
import "./style.css";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const data = [
  {
    img: img1,
    head: "Food & Wine",
    disc: "In favor of exquisite freshness and the highest standards, we offer a carefully created selection of culinary delights.",
  },
  {
    img: img2,
    head: "Unique Atmosphere",
    disc: "Both through stylish vaulted cellar and wonderfull unique ambience",
  },
];

const ImageSlider = () => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="carousel">
      {data.map((item, idx) => {
        return (
          <div
            className={
              slide === idx
                ? "slide imageslider-container"
                : "slide imageslider-container slide-hidden "
            }
          >
            <div className="imageslider-img">
              <img src={item.img} alt={item.head} />
            </div>
            <div className="imageslider-text">
              <p className="imageslider-head">{item.head}</p>
              <p className="imageslider-disc">{item.disc}</p>
            </div>
          </div>
        );
      })}
      <IoIosArrowRoundBack className="arrows arrow-one" onClick={nextSlide} />
      <IoIosArrowRoundForward
        className="arrows arrow-two"
        onClick={prevSlide}
      />
    </div>
  );
};

export default ImageSlider;
