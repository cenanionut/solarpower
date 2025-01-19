import React from "react";
import "../App.css";
import Button from "./Button";
import "./css/HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="headline">SAVING ENERGY</h1>
      <p className="sub-headline">What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          linkto="/tehnic"
        >
          DESCOPERA
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          linkto="/device"
        >
          URMARESTE DEVICE <i className="far fa-play-circle spinning" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
