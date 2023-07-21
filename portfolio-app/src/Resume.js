import React from 'react';
import './App.css';
import resumeImage from './Images/info.jpeg';

const Resume = () => {
  const resumeLink = '#resume'; 

  return (
    <div id="resume" className="resume-container">
      <h2>Resume</h2>
      <img src={resumeImage} alt="My Resume" className="resume-image" />
      <a href={resumeLink} className="box-link">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;


