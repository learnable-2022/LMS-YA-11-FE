import React from "react";
import "./nav.css";
import logopurple from "../../assets/images/logopurple.png";

export const Nav = () => {
  return (
    <div className="nav">
      <div className="brand">
        <span className="logo">
          <img src={logopurple} alt="logo" width={40} />
        </span>
        <span className="brand-name">Academix</span>
      </div>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="navigate">
        <span className="categories">Categories</span>
        <span className="about">About Us</span>
      </div>
      <div className="buttons">
        <button className="get-started">Get Started for Free</button>
      </div>
    </div>
  );
};
