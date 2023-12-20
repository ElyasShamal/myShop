import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div className="hand-icon">
          <p>New</p>
          <img src={handIcon} alt="hand icon" width="100px" />
        </div>
        <p>Collections</p>
        <p>For Everyone</p>
        <div className="lastest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="arrow" />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} alt="background" height="590px" />
      </div>
    </div>
  );
};

export default Hero;
