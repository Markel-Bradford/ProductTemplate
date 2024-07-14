import React from "react";
import "../Styles/Hero.css"

const Hero = () => {
  
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="hero-title">Platinum Threads</h1>
        <p className="hero-sub">Let your style shine</p>
      </div>
      <div className="hero-img">
        <img src="/ProductTemplate/assets/shadesmodel.png" alt="" className="hero-photo" />
      </div>
    </div>
  );
};

export default Hero;
