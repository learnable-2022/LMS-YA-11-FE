import React from "react";
import "../range/range.css";
import sect1 from "../../assets/images/sect1.png";
import sect2 from "../../assets/images/sect2.png";
import sect3 from "../../assets/images/sect3.png";

export const Range = () => {
  return (
    <div className="range-container">
      <div className="course-offering">
        <div className="offering">
          <h2>An Extensive Range of Course Offerings</h2>
          <p>
            Explore our comprehensive catalog of diverse courses, carefully
            curated to cater to your learning goals.
          </p>
        </div>
        <div className="offering-options">
          <img src={sect1} alt="" width="600px" />
        </div>
      </div>
      <div className="tutoring">
        <div className="catalogue-left">
          <img src={sect2} alt="" width="400px" />
        </div>
        <div className="catalogue-right">
          <h2>One on one experience with a tutor</h2>
          <p>
            Explore our comprehensive catalog of diverse courses, carefully
            curated to cater to your learning goals.
          </p>
        </div>
      </div>
      <div className="teaching-style">
        <div className="catalogue-left">
          <h2>Use your own teaching style</h2>
          <p>Manage your team in a way that works for everyone</p>
        </div>
        <div className="catalogue-right">
          <img src={sect3} alt="" width="500px" />
        </div>
      </div>
    </div>
  );
};
