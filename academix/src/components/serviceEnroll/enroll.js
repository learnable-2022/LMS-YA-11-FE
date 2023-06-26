import React from "react";
import "../serviceEnroll/enroll.css";

export const Enroll = () => {
  return (
    <div className="enroll">
      <h2>
        Create a more
        <br />
        intelligent organization
      </h2>
      <div className="enroll-wrap">
        <div className="enroll-input">
          <div className="model">
            <input type="text" placeholder="Business Model" />
          </div>
          <div className="email">
            <input type="text" placeholder="Email Address" />
          </div>
          <div className="start-button">
            <input type="button" value="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};
