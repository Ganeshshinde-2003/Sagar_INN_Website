import React, { useEffect } from "react";
import first from "../assets/home/brooke-lark-oaz0raysASk-unsplash 1.png";
import sec from "../assets/home/Artboard 7@4x 1.png";
import third from "../assets/home/yves-cedric-schulze-oaM9nFZmMYI-unsplash 1.png";
import fourth from "../assets/home/Artboard 9@4x 1.png";
import "./style.css";
import ImageSlider from "../components/ImageSlider";
import {
  Animator,
  Fade,
  MoveOut,
  ScrollContainer,
  batch,
} from "react-scroll-motion";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <ScrollContainer>
      <div className="home-container">
        <div className="home-firstimage">
          <img src={first} alt="first" />
          <Animator
            className="home-firstimage-animator"
            animation={batch(Fade(), MoveOut())}
          >
            <p>
              ENJOYMENT WITH <br />
              STYLE
            </p>
          </Animator>
        </div>
        <div className="home-greenback">
          <img src={sec} alt="second" />
          <p data-aos="fade-up" className="home-sec-text">
            To make goodness more genuine and happiness purer". Sagar INN wants
            to bring consumers not just delicious food and a quality
            environment, but a lifestyle that combines companionship, growth and
            happiness.
            <br />
            <br />
            Through a shared commitment to excellence, we are dedicated to the
            uncompromising quality of our food, service and people, while taking
            exceptional care of our quests and staff. We will continuously
            strive to surpass our own accomplishments and be recognized as one
            of the best in our area.
            <br />
            <br />
            At Sagar Inn, we create good memories by serving original-style
            dishes using a recipe that has been passed down over generations.
            Our restaurant provides an authentic dining experience that is
            unique to the area.
          </p>
        </div>
        <div className="home-imgtext">
          <div className="textpart" data-aos="fade-right">
            <p className="textpart-h1">WITH PASSION AND HEARTBLOOD</p>
            <p className="textpart-disc">
              Over 30 years we have been committed to providing all of our
              guests with an unforgettable dining experience. Our restaurant has
              a very special atmosphere and we attach great importance to
              excellent service and the excellent quality of the food and
              drinks.
            </p>
          </div>
          <div className="imgpart">
            <img src={third} alt="third" />
          </div>
        </div>
        <div className="home-slider">
          <p className="slider-headings" data-aos="fade-right">
            A DREAM <br /> <span>FOR THE PALATE</span>
          </p>
          <p className="slider-disc" data-aos="fade-left">
            Get an insight into our exquisite range of dishes and
            <br /> our diverse range of quality wines.
          </p>
          <img className="home-slider-image" src={fourth} alt="four" />
          <ImageSlider />
          <hr />
        </div>
      </div>
    </ScrollContainer>
  );
};

export default HomePage;
