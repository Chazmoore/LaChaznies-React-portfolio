import React from 'react';
import './App.css';
import calenderImage from './Images/calendar1.png';
import codequizImage from './Images/codequiz.png';
import noteImage from './Images/note1.png';
import projImage from './Images/proj1.png';
import pwImage from './Images/Pw.png';
import weatherImage from './Images/weather2.png';

const Portfolio = () => {
  // Sample array of image URLs and corresponding links
  const imageLinks = [
    { imageUrl: calenderImage, linkUrl: 'https://chazmoore.github.io/mod5-Calender/' },
    { imageUrl: codequizImage, linkUrl: 'https://chazmoore.github.io/Mod-4-Quiz-/' },
    { imageUrl: noteImage, linkUrl: 'https://mekel-note-taker-7db9ae1e93dd.herokuapp.com/' },
    { imageUrl: projImage, linkUrl: 'https://jacobryanwillis.github.io/Your_Digital_Personal_Trainer/' },
    { imageUrl: pwImage, linkUrl: 'https://chazmoore.github.io/JS-Password-Generator/' },
    { imageUrl: weatherImage, linkUrl: 'https://chazmoore.github.io/mod6-the-weather/' },
    // Add more image URLs and links as needed
  ];

  return (
    <div id="portfolio" className="portfolio-container">
      <h2 className="portfolio-heading">My Portfolio</h2>
      <div className="portfolio-row">
        {imageLinks.map((imageLink, index) => (
          <div key={index} className="box">
            <a href={imageLink.linkUrl} target="_blank" rel="noopener noreferrer">
              <img src={imageLink.imageUrl} alt={`Box ${index + 1}`} className="box-image" />
            </a>
            <a href={imageLink.linkUrl} target="_blank" rel="noopener noreferrer" className="box-link">
              View Project {index + 1}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;









