import React from "react";
import "./Hero.css";
import video from "../assets/Video/video-1.mp4";
const Hero = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1 className="title">We deliver Tomorrow's Solutions Today</h1>
    </div>
  );
};

export default Hero;
