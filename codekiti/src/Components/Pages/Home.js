// Home.js
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <>
      <div className="main-container">
        <div className="home-container">
          <div className="welcome-text">
            <h1>
              Welcome To <span className="whitspace"> </span> CodeTikki IT
              Solutions
            </h1>
            <p>
              At CodeTikki, we are dedicated to redefining possibilities in the
              realm of technology. Our commitment extends beyond delivering mere
              solutions; we strive to transform challenges into opportunities,
              empowering businesses and individuals to thrive in the digital
              age.
            </p>
            <p>
              <a href="#">Explore</a>
            </p>
          </div>
          <div className="image-container">
            <img src="../Images/AI-removebg-preview 1.png" alt="Your Image" />
          </div>
        </div>
        <div className="mission-container">
          <div className="our-container">
            <h1>
              <span> Our</span> Mission
            </h1>
          </div>
          <div className="h3">
            <h3>Empowering Your Digital Footprint</h3>
          </div>

          <div className="text1">
            <p>
              We are on a mission to empower your digital footprint. Our ethos
              revolves around harnessing technology's potential to craft bespoke
              solutions that elevate your digital presence, foster growth, and
              drive success in an increasingly competitive market.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
