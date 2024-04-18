// Home.js
import React from "react";
import "./Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>
          Welcome To <span className="whitspace"> </span> CodeTikki IT Solutions
        </h1>
        <p>
          At CodeTikki, we are dedicated to redefining possibilities in the
          realm of technology. Our commitment extends beyond delivering mere
          solutions; we strive to transform challenges into opportunities,
          empowering businesses and individuals to thrive in the digital age.
        </p>
        <p>
          <a href="#">Explore</a>
        </p>
      </div>
      <div className="image-container">
        <img src="../Images/AI-removebg-preview 1.png" alt="Your Image" />
      </div>
    </div>
  );
};

export default Home;
