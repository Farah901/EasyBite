import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-container">
        <div className="about-image">
          <div className="image-frame"></div>
        </div>
        
        <div className="about-content">
          <h2 className="about-title">Our Flavorful Journey</h2>
          <p className="about-subtitle">Delivering happiness to your doorstep since 2025</p>
          
          <div className="about-text">
            <b>
            <p>
              At Moun, we believe great food should come to you. Born from a passion for authentic flavors 
              and convenience, we've crafted a menu that travels well without compromising on quality.
            </p></b>
            
            <div className="special-note">
              <span className="note-icon"></span>
              <b>
              <p>
                Our chefs prepare each dish with the same care as if you were dining in, 
                using fresh, locally-sourced ingredients.
              </p></b>
            </div>
            <b>
            <p>
              We're not just a delivery service - we're your kitchen away from home. Every meal is packed 
              with love and designed to arrive at your door as perfect as if you made it yourself.
            </p></b>
          </div>
          
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">10,000+</span>
              <b><span className="stat-label">Happy Customers</span></b>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <b><span className="stat-label">Specialty Dishes</span></b>
            </div>
            <div className="stat-item">
              <span className="stat-number">30min</span>
              <b><span className="stat-label">Avg. Delivery</span></b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;