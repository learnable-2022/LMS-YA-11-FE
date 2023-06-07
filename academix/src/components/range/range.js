import React from "react";
import "../range/range.css";
import design from "../../assets/design.png";
import developer from "../../assets/developer.png";
import web3 from "../../assets/web3.png";
import finance from "../../assets/finance.png";
import music from "../../assets/music.png";
import cooking from "../../assets/cooking.png";

function Range() {
  return (
    <div className="range">
      <div className="range-header">
        <h2>An Extensive Range of Course Offerings</h2>
        <p>
          Explore our comprehensive catalog of diverse courses, <br /> carefully
          curated to cater to your learning goals.
        </p>
      </div>
      <div className="range-list">
        <div className="list-top">
          <div className="design">
            <img src={design} alt="designer" />
            <p className="button">Design</p>
          </div>
          <div className="development">
            <img src={developer} alt="developer" />
            <p className="button">Development</p>
          </div>
          <div className="web-3">
            <img src={web3} alt="web 3" />
            <p className="button">Web 3</p>
          </div>
        </div>
        <div className="list-bottom">
          <div className="finance">
            <img src={finance} alt="finance" />
            <p className="button">Finance</p>
          </div>
          <div className="music">
            <img src={music} alt="music" />
            <p className="button">Music</p>
          </div>
          <div className="cooking">
            <img src={cooking} alt="cooking" />
            <p className="button">Cooking</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Range;
