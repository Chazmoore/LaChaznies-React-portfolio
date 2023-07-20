
import React from 'react';
import './App.css'; 
import image from './Images/me.jpg'

const About = () => {
  return (
    <div className="about-container">
      <img src="/IMG_9317.jpg" alt="About Me" className="about-image" />
      <p className="about-text">
        Your About Me text goes here.
        <br />
        Additional lines of text can be added as needed.
      </p>
    </div>
  );
};

export default About;
