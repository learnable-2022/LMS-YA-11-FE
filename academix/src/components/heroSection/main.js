import React from "react";
import "../heroSection/main.css";
import hero from "../../assets/images/hero-image.png";

export const Main = () => {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-left">
          <h1>
            Unlock Your <span className="potential">Potential,</span> Embrace
            Knowledge
          </h1>
          <p className="join-details">
            Discover a world of endless possibilities with our cutting-edge
            Learning Management System. Dive into engaging courses, interactive
            resources, and personalized learning paths. Join us today and
            empower your future!
          </p>
          <button className="join-button">Join Now</button>
        </div>
        <div className="main-right">
          <img
            src={hero}
            alt="Image of a boy on computer"
            className="image-1"
          />
        </div>
      </div>
    </div>
  );
};
