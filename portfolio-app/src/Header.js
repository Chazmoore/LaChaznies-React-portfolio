// Header.js
import React from 'react';
import './App.css'

const Header = () => {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/AboutPage">About Me</a>
          </li>
          <li>
            <a href="/PortfolioPage">Portfolio</a>
          </li>
          <li>
            <a href="/ResumePage">Resume</a>
          </li>
          <li>
            <a href="/ContactPage">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

