import React from "react";
import "../serviceEnroll/service.css";
import foundation from "../../assets/images/foundation.png";
import build from "../../assets/images/build.JPG";
import unleash from "../../assets/images/unleash.png";

export const Service = () => {
  return (
    <div className="service">
      <div className="service-info">
        <h2>For every team and their service</h2>
        <p>
          Offer quality teaching experience for your team or partners, customers
          and employees
        </p>
      </div>
      <div className="service-courses">
        <div className="training">
          <img src={foundation} alt="Software development" />
          <div className="training-info">
            <p>Software Engineering</p>
            <h2>Sales Training</h2>
          </div>
        </div>
        <div className="design">
          <img src={build} alt="product design" />
          <div className="training-info">
            <p>Product Design</p>
            <h2>Basics of Team Building</h2>
          </div>
        </div>
        <div className="development">
          <img src={unleash} alt="personal development" />
          <div className="training-info">
            <p>Personal Development</p>
            <h2>Unleash Your Potential</h2>
          </div>
        </div>
      </div>
      <div className="more-button">View more</div>
    </div>
  );
};
