import React from "react";
import "../footer/footer.css";
import logopurple from "../../assets/images/logopurple.png";
import largelogo from "../../assets/images/largelogo.png";
import dribble from "../../assets/images/dribble.png";
import youtube from "../../assets/images/youtube.png";
import instagram from "../../assets/images/instagram.png";
import twitter from "../../assets/images/twitter.png";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <div className="footer-logo">
          <div className="large-logo">
            <img src={largelogo} alt="logo" width={250} />
          </div>
          <div className="footer-brand">
            <div className="logo">
            <img src={logopurple} alt="logo" width={40} />
          </div>
          <div className="logo-name">Academix</div>
        </div>
          </div>
        <div className="footer-nav">
          <div className="us">
            <div className="nav-title">Who We Are</div>
            <p className="nav-options">Overview</p>
            <p className="nav-options">Features</p>
            <p className="nav-options">Our Values</p>
            <p className="nav-options">Pricing</p>
            <p className="nav-options">Releases</p>
          </div>
          <div className="support">
            <div className="nav-title">Support</div>
            <p className="nav-options">Contact</p>
            <p className="nav-options">Help Center</p>
            <p className="nav-options">Careers</p>
            <p className="nav-options">FAQs</p>
            <p className="nav-options">Partners</p>
          </div>
          <div className="socials">
            <div className="nav-title">Follow Us</div>
            <p className="nav-options">Instagram</p>
            <p className="nav-options">Twitter</p>
            <p className="nav-options">Facebook</p>
            <p className="nav-options">Tik-tok</p>
          </div>
        </div>
      </div>
      <div className="reserved">
        <div className="copyright">
          &copy; 2023 Academix. All rights reserved.
        </div>
        <div className="social-icons">
          <img src={dribble} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={twitter} alt="" />
        </div>
      </div>
    </div>
  );
};
