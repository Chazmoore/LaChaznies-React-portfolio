import React from 'react';
import './App.css';
import image from './Images/me.jpg';

const About = () => {
  return (
    <div id="about" className="about-container">
      <h2>About Me</h2>
      <img src={image} alt="About Me" className="about-image" />
      <p className="about-text">
        I am a passionate and creative web developer with a love for building interactive and user-friendly web applications. My journey in web development began with learning HTML and CSS, and I quickly fell in love with coding.
        <br />
        As a frontend developer, I enjoy bringing designs to life using technologies like React, JavaScript, and CSS. I also have experience working with backend technologies such as Node.js and Express to create full-stack applications.
      </p>
    </div>
  );
};

export default About;


