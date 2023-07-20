// Resume.js
import React from 'react';
import './App.css'; 
import resumeImage from './Images/info.jpeg';

const Resume = () => {
  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <img src={resumeImage} alt="My Resume" className="resume-image" />
      <a href={resumeImage} download="info.jpeg">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
