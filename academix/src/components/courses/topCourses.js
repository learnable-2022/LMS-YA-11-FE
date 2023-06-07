import React from "react";
import './topCourses.css';
import orangeline from "../../assets/orangeline.png";
import purpleline from "../../assets/purpleline.png";
import foundation from "../../assets/foundation.png";
import delicious from "../../assets/delicious.png";
import adobe from "../../assets/adobe.png";
import technology from "../../assets/technology.png";
import storytelling from "../../assets/storytelling.png";
import melodies from "../../assets/melodies.png";
import marketing from "../../assets/marketing.png";
import unleash from "../../assets/unleash.png";
import starfull from "../../assets/starfull.png";
import starempty from "../../assets/starempty.png";
import starhalf from "../../assets/starhalf.png";

export const SignInBtn = () => {
  return (
    <div className="topcourses">
      <div className="headline">
        <h2>Our Top Courses</h2>
        <div className="lines">
          <img src={orangeline} alt="orange line" />
          <img src={purpleline} alt="purple line" />
        </div>
      </div>
      <div className="courses">
        <div className="courses-top">
          <div className="foundation">
            <img src={foundation} alt="Software development" />
            <p>Software Engineering</p>
            <h2>Foundation course to understand software development</h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starhalf} alt="star" />
            </div>
          </div>
          <div className="delicious">
            <img src={delicious} alt="Cooking" />
            <p>Cooking</p>
            <h2>
              Delicious Delights: A Culinary Journey in the Art of Cooking
            </h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starhalf} alt="star" />
              <img src={starempty} alt="star" />
            </div>
          </div>
          <div className="adobe">
            <img src={adobe} alt="User Interface" />
            <p>Product Design</p>
            <h2>Foundation of User Interface Design using Adobe XD</h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starempty} alt="star" />
            </div>
          </div>
          <div className="technology">
            <img src={technology} alt="Web 3" />
            <p>Blockchain</p>
            <h2>Web3: Unleashing the Future of Decentralized Technology</h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
            </div>
          </div>
        </div>
        <div className="courses-bottom">
          <div className="storytelling">
            <img src={storytelling} alt="Photography" />
            <p>Photography</p>
            <h2>
              The Art of Visual Storytelling: Mastering Photography Essentials.
            </h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starhalf} alt="star" />
            </div>
          </div>
          <div className="melodies">
            <img src={melodies} alt="Music" />
            <p>Music</p>
            <h2>Harmonious Melodies: Exploring the Art of Music.</h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starhalf} alt="star" />
              <img src={starempty} alt="star" />
            </div>
          </div>
          <div className="marketing">
            <img src={marketing} alt="Marketing" />
            <p>Marketing</p>
            <h2>
              Strategic Marketing <br /> Mastery: Driving
              <br />
              Success in the Digital
              <br /> Age.
            </h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
            </div>
          </div>
          <div className="unleash">
            <img src={unleash} alt="Personal development" />
            <p>Personal Development</p>
            <h2>Unleash Your Potential: Mastering Personal Development.</h2>
            <div className="rating">
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
              <img src={starfull} alt="star" />
            </div>
          </div>
        </div>
        <div className="more-button">View more</div>
      </div>
    </div>
  );
}
