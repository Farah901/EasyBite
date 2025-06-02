import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

function Footer() {
  return (
   <div className="footer" id="footer">
  <div className="footer-content">
    <div className="footer-content-left footer-cut">  {/* ✅ ici */}
      <img src={assets.logo} className="logo" alt="" />
      <p>
       EasyBite is your premier online food ordering platform, 
            connecting you with top-rated restaurants across Morocco. 
            No physical location - just seamless digital ordering 
            and fast delivery to your doorstep. 
            Satisfy your cravings with just a few taps!
      </p>
      <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
      </div>
    </div>

    <div className="footer-content-center">
      <h2>COMPANY</h2>
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Delevery</li>
        <li>Privacy policy</li>
      </ul>
    </div>

    <div className="footer-content-right">
      <h2>GET IN TOUCH</h2>
      <ul>
        <li>+212 612-345-678</li>
        <li>contact@easybite.com</li>
      </ul>
    </div>
  </div>

  <hr />
  <p className="footer-copyright">
    Copyright 2025 © EasyBite.com - All right Reserved.
  </p>
</div>

  );
}

export default Footer;
