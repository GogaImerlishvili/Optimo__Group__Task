import React from "react";
import "./Home.css";
import video from "../assets/Video/video-1.mp4";
const Home = () => {
  return (
    <div className="hero-container">
      <video src={video} autoPlay loop muted />
      <h1 className="title">We deliver Tomorrow's Solutions Today</h1>
    </div>
  );
};

export default Home;
