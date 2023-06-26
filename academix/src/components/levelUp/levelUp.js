import React from "react";
import "../levelUp/levelUp.css";
import Star3 from "../../assets/images/Star3.png";
import cuate from "../../assets/images/cuate.png";

export const LevelUp = () => {
  return (
    <div className="levelup">
      <img src={cuate} alt="" className="cuate" />
      <div className="levelup-container">
        <div className="text-wrap">
          <div className="left">
            <h2>
              Ready to level up
              <br /> your learning experience?
            </h2>
            <button>Join Now</button>
          </div>
          <div className="right">
            <img src={Star3} alt="A woman working on her laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};
